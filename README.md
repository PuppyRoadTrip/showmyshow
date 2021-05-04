![GitHub Last Commit](https://img.shields.io/github/last-commit/PuppyRoadTrip/showmyshow?style=plastic)
![GitHub Repo Size](https://img.shields.io/github/repo-size/PuppyRoadTrip/showmyshow?style=plastic)
![GitHub Followers](https://img.shields.io/github/followers/PuppyRoadTrip?style=social)
![GitHub](https://img.shields.io/github/languages/top/PuppyRoadTrip/showmyshow?style=plastic)


# ShowMyShow
> This is a repository for the ShowMyShow App, created by Puppy Road Trip, LLC.
 
## Table of contents
* [General Info](#general-info)
* [Technologies and Sources](#technologies-and-sources)
* [APIs](#apis)
* [Messaging Functionality](#messaging-functionality)
* [Database Integration](#database-integration)
* [Live Link](#Live-Link)
* [Screen Shot](#Screen-Shot)
* [Code Snippets](#code-snippets)
* [Contact](#contact)

## General Info
ShowMyShow is an application that allows fans and bands to connect with one another. Users (fans or bands) can sign up using a valid email address and connect to a one-stop shop that allows them to find out tons of information on upcoming music events in a given city. Fans can search for concerts in a specific city and are returned a list of upcoming shows with specific information and links to tickets via Ticketmaster - fans can also save shows to their profile and come back to them at a later date. Bands are able to do the same - they can search for shows and find out information based on a specific city input. There is also a messaging function - the "Green Room" - where fans can connect with other fans to talk about MUSIC! Additionally, upon login, fans and bands alike are provided with a scrape of Tweets from the hashtage #ShowMyShow directly on their login page so they can keep current with any immediate information shared via Twitter.

## Technologies and Sources
* ![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

* ![ReactJS](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

* ![ReactRouter](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

* ![HTML](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)

* ![CSS](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)

* ![Material-UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)

* ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

* ![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

* ![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
  * [Dotenv](https://www.npmjs.com/package/dotenv)
  * [Morgan](https://www.npmjs.com/package/morgan)
  * [Node Fetch](https://www.npmjs.com/package/node-fetch)
  * [Mongoose](https://www.npmjs.com/package/mongoose)

* ![AWS](https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)
  * Amplify
  * Cognito

* ![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)

* ![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket-dot-io&logoColor=white)

## APIs
[![TicketMaster Discovery API](https://img.shields.io/badge/ticketmaster-026CDF?style=for-the-badge&logo=ticketmaster&logoColor=white)](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/)

[![Twitter API](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white
)](https://developer.twitter.com/en)

## Live Link
[ShowMyShow](https://showmyshow.herokuapp.com/)

## Screen Shot
![HomePageGif](./client/public/showmyshow.gif)

## Code Snippets

The below example code displays the Socket.io messaging functionality live in the production environment:
```js
const http = require('http').Server(app);
const io = require('socket.io')(http, {
  cors: {
    origin: 'https://showmyshow.herokuapp.com/',
    methods: ['GET', 'POST'],
    allowedHeaders: ['chat'],
    credentials: true
  },
});
```

The below example code shows a custom hook that returns the Username from AWS Cognito authentication:
```js
function useUserAuth() {
  const [userState, setUserState] = useState('');
  useEffect(() => {
    Auth.currentAuthenticatedUser().then((user) => {
      if (user.attributes.email === userState) return;
      setUserState(`${user.attributes.email}`);
    });
  });
  return [userState]
};
```

The below example code shows the User schema validation through MongoDB:
```js
const userSchema = new Schema({
  username: {
    type: String,
    lowercase: true,
    required: true,
    validate: {
        isAsync: true,
        validator: function(value, isValid) {
            const self = this;
            return self.constructor.findOne({ username: value })
            .exec(function(err, user){
                if(err){
                    throw err;
                }
                else if(user) {
                    if(self.id === user.id) {
                        return isValid(true);
                    }
                    return isValid(false);  
                }
                else{
                    return isValid(true);
                }
            })
        },
        message:  'The email address is already taken!'
    },
},
  savedShows: {
    type: Array,
    ref: 'Show',
  },
});
const User = mongoose.model('User', userSchema);
module.exports = User;
```

The below example code allows a user to save a show to their username and prevents the user from saving the show twice:
```js
Router.post('/:username/show', function (req, res) {
  const savedShow = req.body;
  User.findOneAndUpdate(
    { username: req.params.username },
    { $addToSet: { savedShows: savedShow } },
    { new: true }
  )
    .then(function (dbUser) {
      res.json(dbUser);
    })
    .catch(function (err) {
      res.json(err);
    });
});
```

## Contact
Created by Puppy Road Trip LLC. Please reach out to us for future collaboration!

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/PuppyRoadTrip/showmyshow)

Puppy Road Trip, LLC is:

[Sloan Lacey](https://www.linkedin.com/in/sloanlacey/)
[Jayme Mizelle](https://www.linkedin.com/in/jayme-mizelle/)
[Joshua Rehanek](https://www.linkedin.com/in/joshua-rehanek/)
[Shawn Flanigan](https://www.linkedin.com/in/shawnmflanigan/)
[Sam Rogers](https://www.linkedin.com/in/samuelerogers/)