CREATE TABLE `cubes` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`size` integer NOT NULL,
	`base_color` text NOT NULL,
	`up_color` text NOT NULL,
	`down_color` text NOT NULL,
	`left_color` text NOT NULL,
	`right_color` text NOT NULL,
	`front_color` text NOT NULL,
	`back_color` text NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
