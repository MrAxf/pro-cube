CREATE TABLE `cubes` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` text NOT NULL,
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
	`updated_at` integer NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`last_sign_in_at` integer,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
