'use strict';

angular.module('testTakerApp')
  .service('Groupservice', ['$http', function Groupservice($http) {
        this.getGroups = function () {
            return groups;
        };

        this.insertGroup = function (firstName, lastName, city) {
            var topID = groups.length + 1;
            groups.push({
                id: topID,
                firstName: firstName,
                lastName: lastName,
                city: city
            });
        };

        this.deleteGroup = function (id) {
            for (var i = groups.length - 1; i >= 0; i--) {
                if (groups[i].id === id) {
                    groups.splice(i, 1);
                    break;
                }
            }
        };

        this.getGroup = function (id) {
            var groups = this.getGroups();
            for (var i = 0; i < groups.length; i++) {
                if (groups[i].id === id) {
                    return groups[i];
                }
            }
            return null;
        };

        var groups =[
            {
                id: 1, groupName: 'Babur University', city: 'Karachi',
                groupTests: [
                    { topic: 'Javascript', description: 29.99, numberOfQuestions: 1, orderTotal: 29.99 },
                    { topic: 'jQuery', description: 9.99, numberOfQuestions: 1, orderTotal: 39.96 },
                    { topic: 'HTML5', description: 5.99, numberOfQuestions: 1, orderTotal: 5.99 }
                ],
                groupMembers:[
                    {memberName: ''}
                ]
            },
            {
                id: 2, groupName: 'Siddique University', city: 'Karachi',
                groupTests: [
                    { topic: 'Physics', description: 329.99, numberOfQuestions: 1, orderTotal: 329.99 },
                    { topic: 'Chemistry', description: 129.99, numberOfQuestions: 4, orderTotal: 519.96 },
                    { topic: 'Biology', description: 89.99, numberOfQuestions: 5, orderTotal: 449.95 },
                ],
                groupMembers:[
                    {memberName: ''}
                ]
            },
            {
                id: 3, groupName: 'Badar University', city: 'Karachi',
                groupTests: [
                    { topic: 'ASP.NET', description: 59.99, numberOfQuestions: 1, orderTotal: 59.99 },
                    { topic: 'C#', description: 49.99, numberOfQuestions: 1, orderTotal: 49.99 },
                    { topic: 'Visual Basic', description: 49.99, numberOfQuestions: 1, orderTotal: 49.99 },
                    { topic: 'C++', description: 49.99, numberOfQuestions: 1, orderTotal: 49.99 }
                ],
                groupMembers:[
                    {memberName: ''}
                ]
            },
            {
                id: 4, groupName: 'Waseem University', city: 'Karachi',
                groupTests: [
                    { topic: 'NodeJs', description: 9.99, numberOfQuestions: 5, orderTotal: 49.95 },
                    { topic: 'AngularJs', description: 19.99, numberOfQuestions: 1, orderTotal: 19.99 }
                ],
                groupMembers:[
                    {memberName: ''}
                ]
            },
            {
                id: 5, groupName: 'Javed University', city: 'Karachi',
                groupTests:[
                    {topic:'nil', description: 'nil', numbgerOfQuestions: 0}
                ],
                groupMembers:[
                    {memberName: ''}
                ]
            },
            {
                id: 6, groupName: 'Gul University', city: 'Karachi',
                groupTests: [
                    { topic: 'Objective C', description: 499.99, numberOfQuestions: 1, orderTotal: 499.99 },
                    { topic: 'Mac OS', description: 399.99, numberOfQuestions: 1, orderTotal: 399.99 }
                ],
                groupMembers:[
                    {memberName: ''}
                ]
            },
            {
                id: 7, groupName: 'Babar University', city: 'Karachi',
                groupTests: [
                    { topic: 'Web Design and development', description: 429.99, numberOfQuestions: 1, orderTotal: 429.99 },
                    { topic: 'Data Communication and Networks', description: 1029.99, numberOfQuestions: 1, orderTotal: 1029.99 }
                ],
                groupMembers:[
                    {memberName: ''}
                ]
            },
            {
                id: 8, groupName: 'Syed University', city: 'Karachi',
                groupTests: [
                    { topic: 'BreezeJs', description: 39.99, numberOfQuestions: 1, orderTotal: 39.99 },
                    { topic: 'd3.Js', description: 19.99, numberOfQuestions: 1, orderTotal: 19.99 }
                ],
                groupMembers:[
                    {memberName: ''}
                ]
            },
            {
                id: 9, groupName: 'Rauf University', city: 'Karachi',
                groupTests: [
                    { topic: 'Three.Js', description: 85.99, numberOfQuestions: 1, orderTotal: 85.99 },
                    { topic: 'MVC', description: 39.99, numberOfQuestions: 2, orderTotal: 79.98 }
                ],
                groupMembers:[
                    {memberName: ''}
                ]
            },
            {
                id: 10, groupName: 'Mujahid University', city: 'Karachi',
                groupTests: [
                    { topic: 'Object Oriented Programming', description: 49.99, numberOfQuestions: 4, orderTotal: 199.96 },
                    { topic: 'Data Structure', description: 109.99, numberOfQuestions: 1, orderTotal: 109.99 }
                ],
                groupMembers:[
                    {memberName: ''}
                ]
            },
            {
                id: 11, groupName: 'Feroz University', city: 'Karachi',
                groupTests:[
                    {topic:'nil', description: 'nil', numbgerOfQuestions: 0}
                ],
                groupMembers:[
                    {memberName: ''}
                ]
            }
        ];


    }]);
