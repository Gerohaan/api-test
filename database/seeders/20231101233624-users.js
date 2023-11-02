'use strict';
const bcrypt = require('bcrypt');
const authConfig = require('../../config/auth');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('users', [
      {
        name: 'Gerohaan',
        lastName: 'Torrealba',
        email: 'gero.delfin@gmail.com',
        password:  bcrypt.hashSync('1234', Number.parseInt(authConfig.rounds)),
        status: 'Active'
      },
      {
        name: 'Damian',
        lastName: 'Torrealba',
        email: 'gero.delfin.damian@gmail.com',
        password:  bcrypt.hashSync('1234', Number.parseInt(10)),
        status: 'Active'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
