define([], function() {
    
    quiz = {
        
        'Title' : 'Baseball Home Runs by First Letter',
        'Answers' : [
            { 'ID': 1, 'Answer' : 'Hank Aaron', 'Clue' : '755', 'SubQuizzes' : ['top-1'] },
            { 'ID': 2, 'Answer' : 'Babe Ruth', 'Clue' : '714' },
            { 'ID': 3, 'Answer' : 'Willie Mays', 'Clue' : '660' },
            { 'ID': 4, 'Answer' : 'Sammy Sosa', 'Clue' : '606' }
        ],
        'Rankings' : [
            { 'ID' : 1, 'User' : 'darinh', 'Score': 70 },
            { 'ID' : 2, 'User' : 'kirbykyle', 'Score': 68 },
            { 'ID' : 3, 'User' : 'kthejoker', 'Score': 64 }
        ],
        'Subquizzes' : [ {
            'Name' : 'top-1',
            'Display' : 'Top 1 Hitters',
            'TimeReward': 30 }
        ]
        
        };
    
    return quiz;
    
    });