const { sequelize, Blog, User } = require('./models');

async function seed() {
  await sequelize.sync({ force: true });

  const user = await User.create({
    username: 'testuser',
    password: 'password',
  });

  await Blog.create({
    title: 'First Blog Post',
    content: 'This is the content of the first blog post.',
    userId: user.id,
  });

  console.log('Database seeded!');
  process.exit(); // Ensure the script exits after seeding
}

seed();
