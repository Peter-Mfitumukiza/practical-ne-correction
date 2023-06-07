#ifndef FUNCTIONS_H
#define FUNCTIONS_H

#include <iostream>
#include <chrono>
#include <ctime>
#include <iomanip>
#include <string>
#include <fstream>
#include <cctype>
#include <vector>
#include <algorithm>
#include <sstream>

using namespace std;

bool compareStringsCaseInsensitive(const string &str1, const string &str2)
{
    if (str1.length() != str2.length())
    {
        return false;
    }
    for (size_t i = 0; i < str1.length(); ++i)
    {
        if (std::toupper(str1[i]) != std::toupper(str2[i]))
        {
            return false;
        }
    }
    return true;
}

string toUpperCase(const string &word)
{
    string result = word;
    for (char &c : result)
    {
        c = std::toupper(c);
    }
    return result;
}

vector<string> readLocations()
{
    vector<string> locations;
    string fileName = "locations.txt";
    ifstream inputFile(fileName);
    if (inputFile.is_open())
    {
        string line;
        while (getline(inputFile, line))
        {
            locations.push_back(line);
        }
        inputFile.close();
    }
    else
    {
        cout << "Something went wrong while reading locations" << endl;
    }
    return locations;
}

vector<string> readCases()
{
    vector<string> reportedCases;
    string fileName = "cases.txt";
    ifstream inputFile(fileName);
    if (inputFile.is_open())
    {
        string line;
        while (getline(inputFile, line))
        {
            reportedCases.push_back(line);
        }
        inputFile.close();
    }
    else
    {
        cout << "Something went wrong while reading reported cases" << endl;
    }
    return reportedCases;
}

void welcomeToProgram()
{
    cout << "==============================================" << endl
         << endl;
    cout << "* Welcome to Disease Cases Reporting System! *" << endl
         << endl;
    cout << "* ****************************************** *" << endl
         << endl;
    cout << "* It is developed by Mfitumukiza Peter as a  *" << endl;
    cout << "* practical evaluation for end of Year 3.    *" << endl
         << endl;
    cout << "==============================================" << endl
         << endl;
}

void displayCurrentTime()
{
    // Get the current system time
    std::chrono::system_clock::time_point now = std::chrono::system_clock::now();

    // Convert the time point to a time_t object
    std::time_t currentTime = std::chrono::system_clock::to_time_t(now);

    // Convert the time_t object to a struct tm
    std::tm *timeinfo = std::localtime(&currentTime);

    // Get the current day as a string
    const char *daysOfWeek[] = {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"};
    const char *currentDay = daysOfWeek[timeinfo->tm_wday];

    // Get the current month as a string
    const char *monthsOfYear[] = {"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"};
    const char *currentMonth = monthsOfYear[timeinfo->tm_mon];

    // Get the current time zone
    std::ostringstream timezone;
    timezone << std::put_time(timeinfo, "%Z");

    // Output the current time in the desired format
    std::cout << std::setfill('0');
    std::cout << "Starting at: " << currentDay << " " << currentMonth << " " << std::setw(2) << timeinfo->tm_mday << " ";
    std::cout << std::setw(2) << timeinfo->tm_hour << ":" << std::setw(2) << timeinfo->tm_min << ":" << std::setw(2) << timeinfo->tm_sec << " ";
    std::cout << timezone.str() << " " << timeinfo->tm_year + 1900 << std::endl;
}

void printHelp()
{
    cout << "==============================================" << endl
         << endl;
    cout << "*                  HELP MENU                 *" << endl
         << endl;
    cout << "* ****************************************** *" << endl
         << endl;
    cout << "add <Location>                        :Add a new location" << endl;
    cout << "delete <Location>                     :Delete an existing location" << endl;
    cout << "record <Location> <disease> <cases>   :Record a diseases and its cases" << endl;
    cout << "list locations                        :List all existing locations" << endl;
    cout << "list diseases                         :List existing diseases in locations" << endl;
    cout << "where <disease>                       :Find where diseases exists" << endl;
    cout << "cases <location> <disease>            :Find where diseases exists" << endl;
    cout << "cases <disease>                       :Find total cases of a given disease" << endl;
    cout << "help                                  :Print user manual" << endl;
    cout << "exit                                  :Exit the program" << endl
         << endl;
}

void handleAddCommand()
{
    string location;
    cin >> location;
    if (location == "")
    {
        cout << "No city entered" << endl;
    }

    string fileName = "locations.txt";
    ofstream outputFile(fileName, std::ios::app);
    if (outputFile.is_open())
    {
        outputFile << toUpperCase(location) << "\n";
        outputFile.close();
        cout << "Location " << location << " is successfully added!" << endl;
    }
    else
    {
        cout << "Something went wrong while adding the location.";
    }
}

void deleteCasesInLocation(string location)
{
    vector<string> cases = readCases();
    vector<int> indexToDelete;
    int index = 0;
    for (string reportedCase : cases)
    {
        istringstream iss(reportedCase);
        vector<string> words;

        string word;
        while (iss >> word)
        {
            words.push_back(word);
        }
        if(compareStringsCaseInsensitive(location, words[0])){
            indexToDelete.push_back(index);
        }
        index++;
    }
    // delete the cases with the given location
    for(int i: indexToDelete){
        cases.erase(cases.begin()+ i);
    }
    // write updates to the file
    string fileName = "cases.txt";
    ofstream outputFile(fileName);
    if(outputFile.is_open()){
        for(string reportedCase: cases){
            outputFile<<reportedCase << "\n";
        }
    }else{
        cout<<"Something went wrong when writing updates"<<endl;
    }
}

void handleDeleteCommand()
{
    string location;
    cin >> location;
    string upperCaseLocation = toUpperCase(location);
    vector<string> locations = readLocations();
    // Remove all occurrences of the entered location from the vector
    locations.erase(remove(locations.begin(), locations.end(), upperCaseLocation), locations.end());

    string fileName = "locations.txt";
    ofstream outputFile(fileName);
    if (outputFile.is_open())
    {
        for (const auto &location : locations)
        {
            outputFile << location << "\n";
        }
        outputFile.close();
        cout << "location " << upperCaseLocation << " deleted successfully" << endl;
        deleteCasesInLocation(upperCaseLocation);
    }
    else
    {
        cout << "Something went wrong while recording updated locations" << endl;
    }
}

void handleListCommand()
{
    string nextKeyWord;
    cin >> nextKeyWord;
    if (nextKeyWord == "")
    {
        cout << "Command is incomplete!";
    }
    if (compareStringsCaseInsensitive(nextKeyWord, "locations"))
    {
        vector<string> locations = readLocations();
        std::sort(locations.begin(), locations.end());
        // Print the sorted locations
        for (const string location : locations)
        {
            cout << location << endl;
        }
    }
    else if (compareStringsCaseInsensitive(nextKeyWord, "diseases"))
    {
        cout << "List of all dieseases" << endl;
    }
    else
    {
        cout << "Invalid commmand!" << endl;
    }
}

void handleRecordCommand()
{
    string location, disease;
    int cases;
    cin >> location >> disease >> cases;
    string fileName = "cases.txt";
    ofstream outputFile(fileName, std::ios_base::app);
    if (outputFile.is_open())
    {
        outputFile << toUpperCase(location + "  " + disease + " " + to_string(cases)) << "\n";
        outputFile.close();
    }
    else
    {
        cout << "Something went wrong while recording disease case" << endl;
    }
}

#endif