let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:Technology&api-key=PXr1oRZXATAdybruY0ii3Skeq1x4a0fJ";

$(document).ready(function () {

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        console.log(response.response.docs[0].multimedia[48].legacy.thumbnail)
        function renderNews(index) {
            var image = response.response.docs[index].multimedia[48].legacy.thumbnail
            if (index === 0) {
                $("#cardImg1").attr("src", image)
                var title = response.response.docs[index].headline.main
                $("#cardTitle1").text(title)
                var text = response.response.docs[index].abstract
                $("#cardText1").text(text)
            } else if (index === 1) {
                $("#cardImg2").attr("src", image)
                var title = response.response.docs[index].headline.main
                $("#cardTitle2").text(title)
                var text = response.response.docs[index].abstract
                $("#cardText2").text(text)
            } else if (index === 3) {
                $("#cardImg3").attr("src", image)
                var title = response.response.docs[index].headline.main
                $("#cardTitle3").text(title)
                var text = response.response.docs[index].abstract
                $("#cardText3").text(text)
            }
        }
        renderNews(0);
        renderNews(1);
        renderNews(3);
    })
})
