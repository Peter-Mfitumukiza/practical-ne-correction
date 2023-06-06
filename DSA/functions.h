#ifndef FUNCTIONS_H
#define FUNCTIONS_H

#include <iostream>
#include <chrono>
#include <ctime>
#include <iomanip>
#include <string>

using namespace std;

void welcomeToProgram(){
    cout<<"=============================================="<<endl<<endl;
    cout<<"* Welcome to Disease Cases Reporting System! *"<<endl<<endl;
    cout<<"* ****************************************** *"<<endl<<endl;
    cout<<"* It is developed by Mfitumukiza Peter as a  *"<<endl;
    cout<<"* practical evaluation for end of Year 3.    *"<<endl<<endl;
    cout<<"=============================================="<<endl<<endl;
}

void displayCurrentTime(){
// Get the current system time
    std::chrono::system_clock::time_point now = std::chrono::system_clock::now();

    // Convert the time point to a time_t object
    std::time_t currentTime = std::chrono::system_clock::to_time_t(now);

    // Convert the time_t object to a struct tm
    std::tm* timeinfo = std::localtime(&currentTime);

    // Get the current day as a string
    const char* daysOfWeek[] = { "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" };
    const char* currentDay = daysOfWeek[timeinfo->tm_wday];

    // Get the current month as a string
    const char* monthsOfYear[] = { "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" };
    const char* currentMonth = monthsOfYear[timeinfo->tm_mon];

    // Get the current time zone
    std::ostringstream timezone;
    timezone << std::put_time(timeinfo, "%Z");

    // Output the current time in the desired format
    std::cout << std::setfill('0');
    std::cout << "Starting at: " << currentDay << " " << currentMonth << " " << std::setw(2) << timeinfo->tm_mday << " ";
    std::cout << std::setw(2) << timeinfo->tm_hour << ":" << std::setw(2) << timeinfo->tm_min << ":" << std::setw(2) << timeinfo->tm_sec << " ";
    std::cout << timezone.str() << " " << timeinfo->tm_year + 1900 << std::endl;

}

bool compareStringsCaseInsensitive(const string& str1, const string& str2) {
    if (str1.length() != str2.length()) {
        return false;
    }

    for (size_t i = 0; i < str1.length(); ++i) {
        if (std::toupper(str1[i]) != std::toupper(str2[i])) {
            return false;
        }
    }

    return true;
}

void printHelp(){
    cout<<"=============================================="<<endl<<endl;
    cout<<"*                  HELP MENU                 *"<<endl<<endl;
    cout<<"* ****************************************** *"<<endl<<endl;
    cout<<"add <Location>                        :Add a new location"<<endl;
    cout<<"delete <Location>                     :Delete an existing location"<<endl;
    cout<<"record <Location> <disease> <cases>   :Record a diseases and its cases"<<endl;
    cout<<"list locations                        :List all existing locations"<<endl;
    cout<<"list diseases                         :List existing diseases in locations"<<endl;
    cout<<"where <disease>                       :Find where diseases exists"<<endl;
    cout<<"cases <location> <disease>            :Find where diseases exists"<<endl;
    cout<<"cases <disease>                       :Find total cases of a given disease"<<endl;
    cout<<"help                                  :Print user manual"<<endl;
    cout<<"exit                                  :Exit the program"<<endl<<endl;
}

void handleAddCommand(){
    string location;
    cin>>location;
    cout<<location<<endl;
}

#endif