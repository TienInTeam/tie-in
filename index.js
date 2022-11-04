//Use Express
const express = require('express');
const app = express();

//Server Port
app.listen(process.env.PORT || 2000);

//Middleware for json reading.
app.use(express.json());

///////////Create endpoints///////////

/////////////USER/////////////////

//Get all App Users
app.get('/users', (req, res) => {
  client.connect(async err => {
    const collection = client.db("TestDB1").collection("Users");
    const query = {};
    const allUsers = await collection.find(query).toArray();
    client.close();
    res.status(200).send(allUsers);
  });
});

//Get one App User by UID
app.get('/users/:uid', (req, res) => {
  client.connect(async err => {
    const collection = client.db("TestDB1").collection("Users");
    const user = await collection.findOne(
      { uid: req.params.uid }
    );
    client.close();
    res.status(200).send(user);
  });
});

//Create new App User
app.post('/users', (req, res) => {
  client.connect(async err => {
    const collection = client.db("TestDB1").collection("Users");
    const user = await collection.insertOne({
      uid: req.body.uid,
      email: req.body.email,
      type: req.body.type
    });
    client.close();
    res.send(user)
  });
});

//Update App User
app.put('/users/:id', (req, res) => {
  client.connect(async err => {
    const collection = client.db("TestDB1").collection("Users");
    const student = await collection.findOneAndUpdate(
      { _id: new ObjectId(req.params.id) },
      {
        $set: {
          uid: req.body.uid,
          email: req.body.email,
          type: req.body.type
        }
      }
    );
    client.close();
    res.send(student)
  });
});

///////////////Student//////////////

//Get all Students
app.get('/student', (req, res) => {
  client.connect(async err => {
    const collection = client.db("TestDB1").collection("Students");
    const query = {};
    const allStudents = await collection.find(query).toArray();
    client.close();
    res.status(200).send(allStudents);
  });
});

//Get one student
app.get('/student/:id', (req, res) => {
  client.connect(async err => {
    const collection = client.db("TestDB1").collection("Students");
    const oneStudent = await collection.findOne(
      { _id: new ObjectId(req.params.id) }
    );
    client.close();
    res.status(200).send(oneStudent);
  });
});

//Create new Student
app.post('/student', (req, res) => {
  client.connect(async err => {
    const collection = client.db("TestDB1").collection("Students");
    const student = await collection.insertOne({
      email: req.body.email,
      fullName: req.body.fullname,
      Institution: req.body.institution,
      linkedInUrl: req.body.linkedInUrl,
      githubUrl: req.body.githubUrl,
      profileUrl: req.body.profileUrl
    });
    client.close();
    res.send(student)
  });
});

//Update student data
app.put('/student/:id', (req, res) => {
  client.connect(async err => {
    const collection = client.db("TestDB1").collection("Students");
    const student = await collection.findOneAndUpdate(
      { _id: new ObjectId(req.params.id) },
      {
        $set: {
          email: req.body.email,
          fullName: req.body.fullName,
          Institution: req.body.Institution,
          linkedInUrl: req.body.linkedInUrl,
          githubUrl: req.body.githubUrl,
          profileUrl: req.body.profileUrl
        }
      }
    );
    client.close();
    res.send(student)
  });
});

//Delete data
app.delete('/student/:id', (req, res) => {
  client.connect(async err => {
    const collection = client.db("TestDB1").collection("Students");
    const deleteResponse = await collection.deleteOne(
      { _id: new ObjectId(req.params.id) }
    );
    client.close();
    res.send(deleteResponse)
  });
});

//////////////Student Project/////////////
//Get all student projects
app.get('/student/project', (req, res) => {
  client.connect(async err => {
    const collection = client.db("TestDB1").collection("StudentProjects");
    const query = {};
    const allProjects = await collection.find(query).toArray();
    client.close();
    res.status(200).send(allProjects);
  });
});

//Get one student project
app.get('/student/project/:id', (req, res) => {
  client.connect(async err => {
    const collection = client.db("TestDB1").collection("StudentProjects");
    const oneProject = await collection.findOne(
      { _id: new ObjectId(req.params.id) }
    );
    client.close();
    res.status(200).send(oneProject);
  });
});

//Create new student project
app.post('/student/project', (req, res) => {
  client.connect(async err => {
    const collection = client.db("TestDB1").collection("StudentProjects");
    const project = await collection.insertOne({
    name: req.body.name,
    description: req.body.description,
    teamId: req.body.teamId,
    approvalStatus: req.body.approvalStatus,
    logoUrl: req.body.logoUrl,
    githubUrl: req.body.githubUrl,
    designFileUrl: req.body.designFileUrl,
    websiteUrl: req.body.websiteUrl,
    subjects: req.body.subjects,
    tags: req.body.tags
    });
    client.close();
    res.send(project)
  });
});

//Update student project
app.put('/student/project/:id', (req, res) => {
  client.connect(async err => {
    const collection = client.db("TestDB1").collection("StudentProjects");
    const project = await collection.findOneAndUpdate(
      { _id: new ObjectId(req.params.id) },
      {
        $set: {
          name: req.body.name,
   	  description: req.body.description,
   	  teamId: req.body.teamId,
    	  approvalStatus: req.body.approvalStatus,
    	  logoUrl: req.body.logoUrl,
   	  githubUrl: req.body.githubUrl,
    	  designFileUrl: req.body.designFileUrl,
  	  websiteUrl: req.body.websiteUrl,
  	  subjects: req.body.subjects,
  	  tags: req.body.tags
      }
    }
    );
    client.close();
    res.send(project)
  });
});

//Delete  student project
app.delete('/student/project/:id', (req, res) => {
  client.connect(async err => {
    const collection = client.db("TestDB1").collection("StudentProjects");
    const deleteResponse = await collection.deleteOne(
      { _id: new ObjectId(req.params.id) }
    );
    client.close();
    res.send(deleteResponse)
  });
});


/////////////Business/////////////////
//Get all business
app.get('/business', (req, res) => {
  client.connect(async err => {
    const collection = client.db("TestDB1").collection("Business");
    const query = {};
    const allBusiness = await collection.find(query).toArray();
    client.close();
    res.status(200).send(allBusiness);
  });
});

//Get one business
app.get('/business/:id', (req, res) => {
  client.connect(async err => {
    const collection = client.db("TestDB1").collection("Business");
    const oneBusiness = await collection.findOne(
      { _id: new ObjectId(req.params.id) }
    );
    client.close();
    res.status(200).send(oneBusiness);
  });
});

//Create new Business
app.post('/business', (req, res) => {
  client.connect(async err => {
    const collection = client.db("TestDB1").collection("Business");
    const business = await collection.insertOne({
      name: req.body.name,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      logoUrl: req.body.logoUrl,
      linkedInUrl: req.body.linkedInUrl,
      websiteUrl: req.body.websiteUrl 
    });
    client.close();
    res.send(business)
  });
});

//Update student data
app.put('/business/:id', (req, res) => {
  client.connect(async err => {
    const collection = client.db("TestDB1").collection("Business");
    const business = await collection.findOneAndUpdate(
      { _id: new ObjectId(req.params.id) },
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          phoneNumber: req.body.phoneNumber,
          logoUrl: req.body.logoUrl,
          linkedInUrl: req.body.linkedInUrl,
          websiteUrl: req.body.websiteUrl 
        }
      }
    );
    client.close();
    res.send(business)
  });
});

//Delete  business data
app.delete('/business/:id', (req, res) => {
  client.connect(async err => {
    const collection = client.db("TestDB1").collection("Business");
    const deleteResponse = await collection.deleteOne(
      { _id: new ObjectId(req.params.id) }
    );
    client.close();
    res.send(deleteResponse)
  });
});

/////////////Business Project////////////////////
//Get all business projects
app.get('/business/project', (req, res) => {
  client.connect(async err => {
    const collection = client.db("TestDB1").collection("BusinessProjects");
    const query = {};
    const allProjects = await collection.find(query).toArray();
    client.close();
    res.status(200).send(allProjects);
  });
});

//Get one business project
app.get('/business/project/:id', (req, res) => {
  client.connect(async err => {
    const collection = client.db("TestDB1").collection("BusinessProjects");
    const oneProject = await collection.findOne(
      { _id: new ObjectId(req.params.id) }
    );
    client.close();
    res.status(200).send(oneProject);
  });
});

//Create new business project
app.post('/business/project', (req, res) => {
  client.connect(async err => {
    const collection = client.db("TestDB1").collection("BusinessProjects");
    const project = await collection.insertOne({
    name: req.body.name,
    description: req.body.description,
    teamId: req.body.teamId,
    approvalStatus: req.body.approvalStatus,
    logoUrl: req.body.logoUrl,
    githubUrl: req.body.githubUrl,
    designFileUrl: req.body.designFileUrl,
    websiteUrl: req.body.websiteUrl,
    subjects: req.body.subjects,
    tags: req.body.tags
    });
    client.close();
    res.send(project)
  });
});

//Update business project
app.put('/business/project/:id', (req, res) => {
  client.connect(async err => {
    const collection = client.db("TestDB1").collection("BusinessProjects");
    const project = await collection.findOneAndUpdate(
      { _id: new ObjectId(req.params.id) },
      {
        $set: {
          name: req.body.name,
   	      description: req.body.description,
   	      teamId: req.body.teamId,
    	    approvalStatus: req.body.approvalStatus,
    	    logoUrl: req.body.logoUrl,
   	      githubUrl: req.body.githubUrl,
    	    designFileUrl: req.body.designFileUrl,
  	      websiteUrl: req.body.websiteUrl,
  	      subjects: req.body.subjects,
  	      tags: req.body.tags
        }
      }
    );
    client.close();
    res.send(project)
  });
});

//Delete  business project
app.delete('/business/project/:id', (req, res) => {
  client.connect(async err => {
    const collection = client.db("TestDB1").collection("BusinessProjects");
    const deleteResponse = await collection.deleteOne(
      { _id: new ObjectId(req.params.id) }
    );
    client.close();
    res.send(deleteResponse)
  });
});

///////////////Teams////////////////////////////////
//Get all teams
app.get('/student/teams', (req, res) => {
  client.connect(async err => {
    const collection = client.db("TestDB1").collection("Teams");
    const query = {};
    const allTeams = await collection.find(query).toArray();
    client.close();
    res.status(200).send(allTeams);
  });
});

//Get one student
app.get('/student/teams/:id', (req, res) => {
  client.connect(async err => {
    const collection = client.db("TestDB1").collection("Teams");
    const oneTeam = await collection.findOne(
      { _id: new ObjectId(req.params.id) }
    );
    client.close();
    res.status(200).send(oneTeam);
  });
});

//Create new team
app.post('/student/teams', (req, res) => {
  client.connect(async err => {
    const collection = client.db("TestDB1").collection("Teams");
    const team = await collection.insertOne({
      email: req.body.email,
      fullName: req.body.fullname,
      Institution: req.body.institution,
      linkedInUrl: req.body.linkedInUrl,
      githubUrl: req.body.githubUrl,
      profileUrl: req.body.profileUrl
    });
    client.close();
    res.send(team)
  });
});

//Update team data
app.put('/student/teams/:id', (req, res) => {
  client.connect(async err => {
    const collection = client.db("TestDB1").collection("Teams");
    const team = await collection.findOneAndUpdate(
      { _id: new ObjectId(req.params.id) },
      {
        $set: {
          email: req.body.email,
          fullName: req.body.fullName,
          Institution: req.body.Institution,
          linkedInUrl: req.body.linkedInUrl,
          githubUrl: req.body.githubUrl,
          profileUrl: req.body.profileUrl
        }
      }
    );
    client.close();
    res.send(team)
  });
});

//Delete team
app.delete('/student/teams/:id', (req, res) => {
  client.connect(async err => {
    const collection = client.db("TestDB1").collection("Teams");
    const deleteResponse = await collection.deleteOne(
      { _id: new ObjectId(req.params.id) }
    );
    client.close();
    res.send(deleteResponse)
  });
});

/////////////////Applications///////////////
//Get all applications
app.get('/student/teams/applications', (req, res) => {
  client.connect(async err => {
    const collection = client.db("TestDB1").collection("Applications");
    const query = {};
    const allApplications = await collection.find(query).toArray();
    client.close();
    res.status(200).send(allApplications);
  });
});

//Get one application
app.get('/student/teams/applications/:id', (req, res) => {
  client.connect(async err => {
    const collection = client.db("TestDB1").collection("Applications");
    const oneApplication = await collection.findOne(
      { _id: new ObjectId(req.params.id) }
    );
    client.close();
    res.status(200).send(oneApplication);
  });
});

//Create new application
app.post('/student/teams/applications', (req, res) => {
  client.connect(async err => {
    const collection = client.db("TestDB1").collection("Applications");
    const application = await collection.insertOne({
      email: req.body.email,
      fullName: req.body.fullname,
      Institution: req.body.institution,
      linkedInUrl: req.body.linkedInUrl,
      githubUrl: req.body.githubUrl,
      profileUrl: req.body.profileUrl
    });
    client.close();
    res.send(application)
  });
});

//Update application
app.put('/student/teams/applications/:id', (req, res) => {
  client.connect(async err => {
    const collection = client.db("TestDB1").collection("Applications");
    const application = await collection.findOneAndUpdate(
      { _id: new ObjectId(req.params.id) },
      {
        $set: {
          email: req.body.email,
          fullName: req.body.fullName,
          Institution: req.body.Institution,
          linkedInUrl: req.body.linkedInUrl,
          githubUrl: req.body.githubUrl,
          profileUrl: req.body.profileUrl
        }
      }
    );
    client.close();
    res.send(application)
  });
});

//Delete application
app.delete('/student/teams/applications/:id', (req, res) => {
  client.connect(async err => {
    const collection = client.db("TestDB1").collection("Applications");
    const deleteResponse = await collection.deleteOne(
      { _id: new ObjectId(req.params.id) }
    );
    client.close();
    res.send(deleteResponse)
  });
});