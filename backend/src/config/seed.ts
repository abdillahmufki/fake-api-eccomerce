import { db } from "../config/database";

async function seed() {
  const database = await db;

  console.log("🌱 Seeding database...");

  // DROP TABLE (biar repeatable)
  await database.exec(`
    DROP TABLE IF EXISTS products;
  `);

  // CREATE TABLE
  await database.exec(`
    CREATE TABLE products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      price INTEGER NOT NULL,
      image TEXT,
      stock INTEGER,
      description TEXT
    );
  `);

  // INSERT DATA
  await database.run(`
  INSERT INTO products (name, price, image, stock, description) VALUES
  (
    'Scalevengers Merch - T-shirt Winch Winch Solution Long',
    350000,
    'https://down-id.img.susercontent.com/file/id-11134207-81ztq-mdvv5ql15og26e@resize_w900_nl.webp',
    10,
    'T-shirt lengan panjang dengan desain Winch Winch Solution. Cocok untuk aktivitas outdoor dan trail ride.'
  ),
  (
    'Scalevengers Merch - T-shirt Scale-Wannabe',
    150000,
    'https://down-id.img.susercontent.com/file/id-11134207-7ra0o-md8vehhzrgl41a@resize_w900_nl.webp',
    25,
    'T-shirt kasual dengan desain Scale-Wannabe. Nyaman dipakai harian untuk penggemar RC dan scale build.'
  ),
  (
    'Scalevengers Merch - T-shirt Evolution',
    250000,
    'https://down-id.img.susercontent.com/file/id-11134207-81ztk-mdvv5ql7va4j4f@resize_w900_nl.webp',
    8,
    'T-shirt bertema Evolution yang merepresentasikan perkembangan dan perjalanan komunitas Scalevengers.'
  ),
  (
    'Scalevengers Merch - T-shirt Saturday Night Trails',
    200000,
    'https://down-id.img.susercontent.com/file/id-11134207-7ra0o-md1koj8q8y7w14@resize_w900_nl.webp',
    15,
    'T-shirt edisi Saturday Night Trails, terinspirasi dari sesi trail malam bersama komunitas.'
  ),
  (
    'Scalevengers Merch - T-shirt Remote Edition',
    90000,
    'https://down-id.img.susercontent.com/file/id-11134207-81ztk-mdwpu4hawg75f3@resize_w900_nl.webp',
    30,
    'T-shirt Remote Edition dengan desain minimalis, cocok untuk daily wear dan event komunitas.'
  );
`);

  console.log("✅ Seed completed");
  process.exit(0);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
