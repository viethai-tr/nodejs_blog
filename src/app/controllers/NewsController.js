
class NewsController {

    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    // [GET] /news/:slug
    showDetail(req, res) {
        res.send('NEWS DETAIL');
    }

    showDetailLatest(req, res) {
        res.send('LATEST NEWS!');
    }

}

module.exports = new NewsController;
