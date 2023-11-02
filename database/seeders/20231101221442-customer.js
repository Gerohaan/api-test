'use strict';

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
    await queryInterface.bulkInsert('customers', [
      {
      Name: 'John Doe',
      email: 'gero.delfin@gmail.com',	
      address: 'Barinas, Barinas, Venezuela'
     },
     {
      Name: 'Doe John',
      email: 'gero.delfin.gt@gmail.com',	
      address: 'Barinas, Barinas, Venezuela'
     },
     {
      Name: 'Gerohaan Torrealba',
      email: 'gero.delfin.torrealba@gmail.com',	
      address: 'Barinas, Barinas, Venezuela'
     },
     {
      Name: 'Delfin Torrealba',
      email: 'gero.delfin.delfin@gmail.com',	
      address: 'Barinas, Barinas, Venezuela'
     },
     {
      Name: 'Damian Torrealba',
      email: 'gero.delfin.damian@gmail.com',	
      address: 'Barinas, Barinas, Venezuela'
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
    await queryInterface.bulkDelete('customers', null, {});
  }
};
