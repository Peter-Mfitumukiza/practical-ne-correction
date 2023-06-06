#include <iostream>
#include <string>
#include "functions.h"

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
        else if(compareStringsCaseInsensitive(command, "add")){
            handleAddCommand();
        }
        else if(compareStringsCaseInsensitive(command, "list")){
            handleListCommand();
        }
        else if(compareStringsCaseInsensitive(command, "record")){
            handleRecordCommand();
        }
        else {
            cout << "Invalid command" << endl;
        }
    }

    return 0;
}