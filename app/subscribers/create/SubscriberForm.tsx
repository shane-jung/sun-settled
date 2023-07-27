"use client";
import { Formik, Form, Field } from "formik";
import Select from "react-select";

export default function SubscriberForm({ gardens }: { gardens: any[] }) {
  const options = gardens.map((garden) => ({
    label: garden.name,
    value: garden.id,
  }));

  const planOptions = [
    {
      label: "Pay as you go",
      value: "PAYG",
    },
    {
      label: "Prepaid",
      value: "PREPAID",
    },
  ];
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
      }}
      onSubmit={async (values) => {
        console.log(values);
        const res = await fetch("/api/subscribers", {
          method: "POST",
          body: JSON.stringify(values),
        });
        console.log(res);
      }}
    >
      <Form>
        <h1 className="text-2xl">New Subscriber</h1>
        <label htmlFor="name" className="label">
          Subscriber Name
        </label>
        <Field
          id="name"
          name="name"
          type="text"
          required
          className="input input-bordered"
        />

        <label htmlFor="capacityDc" className="label">
          Email
        </label>
        <Field
          id="email"
          name="email"
          type="email"
          required
          className="input input-bordered"
        />
        {/* 
        <label htmlFor="gardenId" className="label">
          Garden
        </label>
        <Select
          id="gardenId"
          name="gardenId"
          options={options}
        /> */}

        <div>
          <h2 className="text-xl">Allocation</h2>
          {[1].map((index) => (
            <div className="flex flex-row gap-3" key={index}>
              <Select className="w-64" options={options} />
              <label className="input-group">
                <Field
                  className="input input-bordered"
                  type="text"
                  name={`${index}-kW`}
                />
                <span>kW DC</span>
              </label>
              <Select options={planOptions} />
            </div>
          ))}
        </div>

        <button className="btn btn-secondary" type="submit">
          Save
        </button>
      </Form>
    </Formik>
  );
}
