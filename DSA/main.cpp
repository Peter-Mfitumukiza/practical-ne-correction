#include <iostream>
#include <string>
#include "functions.h"

using namespace std;

int main()
{

    welcomeToProgram();
    displayCurrentTime();

    bool shouldContinue = true;

    while (shouldContinue)
    {
        string command;
        cout << "Console> ";
        cin >> command;

        if (compareStringsCaseInsensitive(command, "exit"))
        {
            cout << "Bye!" << endl;
            shouldContinue = false;
        }
        else if (compareStringsCaseInsensitive(command, "help"))
        {
            printHelp();
        }
        else if (compareStringsCaseInsensitive(command, "add"))
        {
            handleAddCommand();
        }
        else if (compareStringsCaseInsensitive(command, "delete"))
        {
            handleDeleteCommand();
        }
        else if (compareStringsCaseInsensitive(command, "list"))
        {
            handleListCommand();
        }
        else if (compareStringsCaseInsensitive(command, "record"))
        {
            handleRecordCommand();
        }
        else if(compareStringsCaseInsensitive(command, "where")){
            handleWhereCommand();
        }
        else if(compareStringsCaseInsensitive(command, "cases")){
            handleCasesCommand();
        }
        else
        {
            cout << "Invalid command" << endl;
        }
    }

    return 0;
}