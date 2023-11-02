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
    await queryInterface.bulkInsert('items', [
      {
      Name: 'Producto 1',
      sku: 'tmgd-1',	
      price: '29'
     },
     {
      Name: 'Producto 2',
      sku: 'tmgd-2',	
      price: '30'
     },
     {
      Name: 'Producto 3',
      sku: 'tmgd-3',	
      price: '31'
     },
     {
      Name: 'Producto 4',
      sku: 'tmgd-4',	
      price: '32'
     },
     {
      Name: 'Producto 5',
      sku: 'tmgd-5',	
      price: '33'
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
    await queryInterface.bulkDelete('items', null, {});
  }
};
