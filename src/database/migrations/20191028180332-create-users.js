module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            password_hash: Sequelize.STRING,
            provider: Sequelize.BOOLEAN,
            created_at: Sequelize.DATE,
            updated_at: Sequelize.DATE,
        });
    },

    down: queryInterface => {
        return queryInterface.dropTable('users');
    },
};
