"use strict";const bcryptjs = require('bcryptjs');

module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('users',
    [
      {
        nome: 'leooliveira',
        email: 'leooliveira@gmail.com',
        password_hash: await bcryptjs.hash('1234567', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {}
    );
  },

  down: () => {},
};
