const path = require('path');
const router = require('router').Rotuer();

const UserAPIRoutes = require('./UserAPI');
const ShowsAPIRoutes = require('./ShowsAPI');
const TwitterAPIRoutes = require('./TwitterAPI');

// Define API routes here
router.use('/api/user', UserAPIRoutes)
router.use('/api/shows', ShowsAPIRoutes)
router.use('/api/twitter', TwitterAPIRoutes)

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

module.exports = router;