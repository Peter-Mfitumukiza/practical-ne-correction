#include <mysql_driver.h>
#include <mysql_connection.h>

sql::mysql::MySQL_Driver *driver;
sql::Connection *con;

// Create a driver object
driver = sql::mysql::get_mysql_driver_instance();

// Establish a connection to the MySQL database
con = driver->connect("tcp://127.0.0.1:3306", "username", "password");

sql::Statement *stmt;
sql::ResultSet *res;

// Create a statement object
stmt = con->createStatement();

// Execute a query
res = stmt->executeQuery("SELECT * FROM your_table");

// Process the result set
while (res->next()) {
    // Retrieve data from each row
    int id = res->getInt("id");
    std::string name = res->getString("name");

    // Do something with the data
    // ...
}

// Clean up
delete res;
delete stmt;

