// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
      
  
  function getLearnerData(course, ag, submissions) {
//learner submissions

//get all learner ids
    let learnerId = submissions.map(id => id.learner_id);

//get unique learner ids
  const uniqueLearnerIds = [];

    for(let i = 0; i < learnerId.length; i++){
        if (!uniqueLearnerIds.includes(learnerId[i])){
            uniqueLearnerIds.push(learnerId[i]);
        }
    }
        //    console.log(uniqueLearnerIds) 

    //convert into array of objects
    let learnerObjects = uniqueLearnerIds.map(id => ({
        id,
        assignments: {},
        totalPoints: 0,
        totalPointsPossible:0
    }));

        // console.log(learnerObjects)

//assignments
    for (let i = 0; i < submissions.length; i++){
        let submission = submissions[i];


    let assignments;

        for (let i = 0; i < ag.assignments.length; i++){
            if (ag.assignments[i].id === submission.assignment_id){
                assignments = ag.assignments[i];
            }
                

        }
            
        let learnerObj;

        for (let i = 0; i < learnerObjects.length; i++) {
            if (learnerObjects[i].id === submission.learner_id) {
                learnerObj = learnerObjects[i];


        // console.log(learnerObj)
    }

}

//grades avg
        let score = submission.submission.score;

        let pointsPossible = assignments.points_possible;
        let totalScore = score / pointsPossible;


        learnerObj.assignments[assignments.id] = totalScore;
        learnerObj.totalPoints += score;
        learnerObj.totalPointsPossible += pointsPossible;

    //    console.log(totalScore);

    }

    let finalGrade = [];
        for (let i = 0; i < learnerObjects.length; i++) {

            let learner = learnerObjects[i];
            let learners = {
                id: learner.id ,
                average: learner.totalPoints / learner.totalPointsPossible
            };
//grades

            for (let i = 0; i < ag.assignments.length; i++) {
                    let assignment = ag.assignments[i];
                   if(learner.assignments[assignment.id]){
                    learners[assignment.id] = learner.assignments[assignment.id];
                   } 

            }
                finalGrade.push(learners);

        }




   
    return finalGrade;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);



//   const result = [
    //   {
    //     id: 125,
    //     avg: 0.985, // (47 + 150) / (50 + 150)
    //     1: 0.94, // 47 / 50
    //     2: 1.0 // 150 / 150
    //   },
    //   {
    //     id: 132,
    //     avg: 0.82, // (39 + 125) / (50 + 150)
    //     1: 0.78, // 39 / 50
    //     2: 0.833 // late: (140 - 15) / 150
    //   }
    // ];