-- CreateTable
CREATE TABLE `Garden` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Subscriber` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_GardenSubscribers` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_GardenSubscribers_AB_unique`(`A`, `B`),
    INDEX `_GardenSubscribers_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_GardenSubscribers` ADD CONSTRAINT `_GardenSubscribers_A_fkey` FOREIGN KEY (`A`) REFERENCES `Garden`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_GardenSubscribers` ADD CONSTRAINT `_GardenSubscribers_B_fkey` FOREIGN KEY (`B`) REFERENCES `Subscriber`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
