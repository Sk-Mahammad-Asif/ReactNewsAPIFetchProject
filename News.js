import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  /*articles= [
    {
      "source": { "id": null, "name": "CoinDesk" },
      "author": "Shaurya Malwa",
      "title": "FTX Says It Moved Remaining Funds to Cold Wallets to 'Mitigate Damage' After 'Unauthorized Transactions' - CoinDesk",
      "description": "Millions of dollars started to mysteriously move from FTX late Friday U.S. hours.",
      "url": "https://www.coindesk.com/business/2022/11/12/ftx-says-it-moved-remaining-funds-to-cold-wallets-to-mitigate-damage-after-unauthorized-withdrawals/",
      "urlToImage": "https://www.coindesk.com/resizer/xAqvWcyjQaHd4Z74_VctEiCf8pk=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/5ZZSXIXNS5A5VID7I2YI2ZET2I.jpg",
      "publishedAt": "2022-11-12T12:23:00Z",
      "content": "Please note that ourprivacy policy,terms of use,cookies, anddo not sell my personal informationhas been updated.\r\nThe leader in news and information on cryptocurrency, digital assets and the future o… [+538 chars]"
    },
    {
      "source": { "id": "cnn", "name": "CNN" },
      "author": "Betsy Klein, Phil Mattingly",
      "title": "Biden arrives in Cambodia looking to counter China's growing influence in Southeast Asia - CNN",
      "description": "President Joe Biden underscored the US partnership with Association of Southeast Asian Nations (ASEAN) countries on Saturday as \"the heart of my administration's Indo-Pacific strategy\" as he seeks to counter China's growing influence ahead of a high-stakes me…",
      "url": "https://www.cnn.com/2022/11/11/politics/joe-biden-cambodia-asean/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221112055610-05-biden-cambodia-asean-111222.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2022-11-12T11:09:00Z",
      "content": "Phnom Penh, CambodiaCNN\r\n  — \r\nPresident Joe Biden underscored the US partnership with Association of Southeast Asian Nations (ASEAN) countries on Saturday as the heart of my administrations Indo-Pac… [+8295 chars]"
    },
    {
      "source": { "id": null, "name": "SheFinds" },
      "author": "faith geiger",
      "title": "The One Fried Food No One Over 40 Should Be Eating Anymore Because It Ruins Your Metabolism - Yahoo Life",
      "description": "Discover the one fried food experts warn against eating if you want a faster metabolism, only on SheFinds.",
      "url": "https://www.shefinds.com/collections/fried-food-stop-eating-over-40-ruins-metabolism-french-fries/",
      "urlToImage": "https://www.shefinds.com/files/2022/11/hot-deep-fryer-with-bubbling-oil.jpg",
      "publishedAt": "2022-11-12T10:00:26Z",
      "content": "Maintaining a balanced diet should always be a top priority, but it’s especially important to consider if you’re trying to shed some pounds. Unfortunately, while not typically an easy feat, weight lo… [+2425 chars]"
    },
    {
      "source": { "id": "the-washington-post", "name": "The Washington Post" },
      "author": "Matt Viser",
      "title": "As Biden and Xi meet, can their old connection avert a clash? - The Washington Post",
      "description": "Biden and Xi forged a connection years ago. As they meet for the first time as presidents, can their old relationship avert a clash between superpowers?",
      "url": "https://www.washingtonpost.com/politics/2022/11/12/biden-xi-meet-avert-clash/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/KWW27T62IGISBGNCTIETUYQC7M.jpg&w=1440",
      "publishedAt": "2022-11-12T10:00:00Z",
      "content": "Comment on this story\r\nJoe Biden shook hands with Xi Jinping that day in 2011 and the two vice presidents walked up a red carpet to the strains of their countries national anthems, until Biden paused… [+12554 chars]"
    },

    {
      "source": { "id": null, "name": "YouTube" },
      "author": null,
      "title": "Crypto exchange FTX files for bankruptcy; CEO Sam Bankman-Fried resigns | Business News | WION - WION",
      "description": "There is simply no end to the woes of Bitcoin exchange FTX and more skeletons are coming out of the closet now. Meanwhile, some experts are calling the crash...",
      "url": "https://www.youtube.com/watch?v=dMZDoHp8Nls",
      "urlToImage": "https://i.ytimg.com/vi/dMZDoHp8Nls/maxresdefault.jpg",
      "publishedAt": "2022-11-12T07:50:57Z",
      "content": null
    },
    {
      "source": { "id": "the-washington-post", "name": "The Washington Post" },
      "author": "Hannah Knowles",
      "title": "Republican Lombardo unseats Democrat Sisolak in Nevada governor's race - The Washington Post",
      "description": "Democratic Gov. Steve Sisolak said Friday night he has conceded to Republican Joe Lombardo in the tight Nevada gubernatorial race, handing the GOP their first and only pickup in a governor’s race this election cycle.",
      "url": "https://www.washingtonpost.com/politics/2022/11/11/nevada-governor-lombardo-sisolak/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/BM3TOES6WQM5F7PAWYOYDAWN44.JPG&w=1440",
      "publishedAt": "2022-11-12T07:22:00Z",
      "content": "Comment on this story\r\nRepublican Joe Lombardo is projected to unseat Democratic Gov. Steve Sisolak in Nevada after a tight race, handing the GOP its first pickup in a governors race this election cy… [+2591 chars]"
    },
    {
      "source": { "id": null, "name": "ESPN" },
      "author": "Myron Medcalf",
      "title": "Ex-top recruit Bates has 30 in E. Michigan debut - ESPN",
      "description": "In his first game with Eastern Michigan, former top prospect Emoni Bates showed his promise while scoring 30 points against No. 22 Michigan.",
      "url": "https://www.espn.com/mens-college-basketball/story/_/id/35006768/ex-top-prospect-emoni-bates-30-eastern-michigan-debut",
      "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1112%2Fr1089827_1024x576_16%2D9.jpg",
      "publishedAt": "2022-11-12T07:01:25Z",
      "content": "In Eastern Michigan's 88-83 loss to No. 22 Michigan in Detroit on Friday night, Emoni Bates looked like the player who had once been hyped as a future NBA star, scoring 30 points and almost leading h… [+2908 chars]"
    },
    {
      "source": { "id": "cnn", "name": "CNN" },
      "author": "Jessie Yeung",
      "title": "Chinese are criticizing zero-Covid — in language censors don't seem to understand - CNN",
      "description": "In many countries, cursing online about the government is so commonplace nobody bats an eye. But it's not such an easy task on China's heavily censored internet.",
      "url": "https://www.cnn.com/2022/11/11/asia/guangzhou-cantonese-covid-dissent-intl-hnk-dst/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221110022528-01-guangzhou-cantonese-covid-dissent-intl-hnk.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2022-11-12T06:27:00Z",
      "content": "In many countries, cursing online about the government is so commonplace nobody bats an eye. But its not such an easy task on Chinas heavily censored internet.\r\nThat doesnt appear to have stopped res… [+9356 chars]"
    },
    {
      "source": { "id": null, "name": "CoinDesk" },
      "author": "Sam Reynolds",
      "title": "Here’s How Much FTX Owes Miami After Arena Sponsorship Cancellation - CoinDesk",
      "description": "The contract between FTX and Miami-Dade County says FTX must pay the County three years of fees in the event of default.",
      "url": "https://www.coindesk.com/business/2022/11/12/heres-how-much-ftx-owes-miami-after-arena-sponsorship-cancellation/",
      "urlToImage": "https://www.coindesk.com/resizer/QiCBMbAWVImSJwSZ9N39KdPylsE=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/7ZKTKUKUBBCP3GP3SN33YHB52Y.jpg",
      "publishedAt": "2022-11-12T06:07:00Z",
      "content": "FTX owes Miami-Dade County, the owners of the facility formerly known as FTX arena, $16.5 million, according to a contract signed last year between the bankrupt exchange.\r\nAccording to the contract, … [+1359 chars]"
    },
    {
      "source": { "id": "associated-press", "name": "Associated Press" },
      "author": "Hanna Arhirova",
      "title": "Zelenskyy says Ukrainian special military units in Kherson - The Associated Press",
      "description": "MYKOLAIV, Ukraine (AP) — Ukraine’s president said Friday that special military units have entered Kherson, a major regional capital that Russian forces had captured early in the war.  Residents took to the streets to celebrate Russia's withdrawal, the latest …",
      "url": "https://apnews.com/article/russia-ukraine-putin-europe-moscow-government-and-politics-0c1bb4cf5a3fa4d2d05aa10ef2929d39",
      "urlToImage": "https://storage.googleapis.com/afs-prod/media/2f78740bc82e4362a847257050e684b5/3000.jpeg",
      "publishedAt": "2022-11-12T06:04:36Z",
      "content": "MYKOLAIV, Ukraine (AP) Ukraines president said Friday that special military units have entered Kherson, a major regional capital that Russian forces had captured early in the war. Residents took to t… [+8001 chars]"
    },
    {
      "source": { "id": null, "name": "MMA Fighting" },
      "author": "MMA Fighting Newswire",
      "title": "UFC 281 Results: Adesanya vs. Pereira - MMA Fighting",
      "description": "Get UFC 281 results for the Adesanya vs. Pereira fight card Saturday night.",
      "url": "https://www.mmafighting.com/2022/11/12/23449516/ufc-281-results-adesanya-vs-pereira",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/M9dJ1QF3qN3tr8bF_ClcZIhHeKk=/0x0:3915x2050/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24189306/1440831141.jpg",
      "publishedAt": "2022-11-12T05:00:00Z",
      "content": "MMA Fighting has UFC 281 results for the Adesanya vs. Pereira event from Madison Square Garden on Saturday night, live blogs for the entire main card, and live UFC 281 Twitter updates.\r\nIn the main e… [+987 chars]"
    },
    {
      "source": { "id": "abc-news", "name": "ABC News" },
      "author": "Libby Cathey",
      "title": "Mark Kelly projected to win Senate race in Arizona - ABC News",
      "description": "Sen. Mark Kelly wins reelection, defeats Trump-backed Blake Masters.",
      "url": "https://abcnews.go.com/Politics/mark-kelly-projected-win-senate-race-arizona/story?id=92685234",
      "urlToImage": "https://s.abcnews.com/images/Politics/mark-kelly-gty-jt-221108_1667949187253_hpMain_16x9_992.jpg",
      "publishedAt": "2022-11-12T04:45:55Z",
      "content": "Sen. Mark Kelly is projected to win reelection, ABC News reports, securing a full six-year term to the Senate after pitching himself as an independent-minded candidate with bipartisan success. Kelly … [+5097 chars]"
    },
    {
      "source": { "id": "axios", "name": "Axios" },
      "author": "Andrew Solender",
      "title": "Trump sues Jan. 6 committee to fight subpoena - Axios",
      "description": "The move likely eliminates the possibility of Trump testifying.",
      "url": "https://www.axios.com/2022/11/12/trump-lawsuit-jan6-committee-subpoena",
      "urlToImage": "https://images.axios.com/i990kkOfVBZpip7qZi_OZkJHfCM=/525x175:2821x1467/1366x768/2022/11/12/1668219009405.jpg",
      "publishedAt": "2022-11-12T04:34:12Z",
      "content": "Former President Trump filed a lawsuit on Friday to counter a subpoena from the Jan. 6 select committee.\r\nWhy it matters: Trump's move likely eliminates the possibility of him testifying before the p… [+1232 chars]"
    },
    {
      "source": { "id": null, "name": "OregonLive" },
      "author": "Jamie Goldberg | The Oregonian/OregonLive",
      "title": "Christine Drazan concedes to Tina Kotek in Oregon governor’s race - OregonLive",
      "description": "Republican Christine Drazan has conceded to Democrat Tina Kotek in Oregon’s race for governor.",
      "url": "https://www.oregonlive.com/politics/2022/11/christine-drazan-concedes-to-tina-kotek-in-oregon-governors-race.html",
      "urlToImage": "https://www.oregonlive.com/resizer/D0_Z6_mwdgNL7G7OMTtI_ifZC8M=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/GMMLJGGN7VEKPI3JJFF4VWWAO4.jpg",
      "publishedAt": "2022-11-12T03:50:00Z",
      "content": "Republican Christine Drazan conceded at mid-afternoon Friday to Democrat Tina Kotek in Oregons race for governor.\r\nIn results tallied as of 3 p.m. Friday, Drazan trailed Kotek by 64,000 votes, at 47.… [+2689 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Samantha Delouya",
      "title": "Elon Musk's takeover of Twitter has translated into huge user growth — for upstart social media platforms like Mastodon and Tumblr, according to new data - Yahoo Finance",
      "description": "Elon Musk has claimed that Twitter's active users are at an all-time high. New data shows smaller rivals as seeing an explosion in downloads, too.",
      "url": "https://www.businessinsider.com/elon-musk-twitter-takeover-user-growth-rivals-mastodon-tumblr-2022-11",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/6Xg5j4.FPt5bGe8PQvB3xA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD05MDA-/https://media.zenfs.com/en/business_insider_articles_888/0768724d5fc32173ffcfa715bd48cf5f",
      "publishedAt": "2022-11-12T02:58:04Z",
      "content": "Musk at a 2022 Halloween party.Taylor Hill/Getty Images\r\n<ul><li>Since taking over Twitter, Musk has said Twitter's active users have surged to new highs.\r\n</li><li>New data from SensorTower found th… [+1977 chars]"
    },
    {
      "source": { "id": "ign", "name": "IGN" },
      "author": null,
      "title": "Black Panther: Wakanda Forever Post-Credits Scene Check-In and Ending Explained - IGN",
      "description": "Do you want to know if there’s a post-credits scene in Black Panther: Wakanda Forever? We’ll tell you right here. Plus, let's dive into what the ending means and the Easter eggs we found!",
      "url": "https://www.ign.com/articles/black-panther-wakanda-forever-post-credits-scene-ending-explained",
      "urlToImage": "https://assets-prd.ignimgs.com/2022/11/10/wakandaforever-blogroll-01-1668118926102.jpg?width=1280",
      "publishedAt": "2022-11-12T02:10:21Z",
      "content": "Let's make this simple: Do you want to know if theres a post-credits scene in Black Panther: Wakanda Forever? Well tell you right here: There is one mid-credits scene in the film and no end-credits s… [+8844 chars]"
    },
    {
      "source": { "id": "independent", "name": "Independent" },
      "author": "Rachel Sharp",
      "title": "Lauren Boebert - live: Republican asks for donations to support recount of Colorado election results - The Independent",
      "description": "Follow for the latest updates in the 2022 midterms",
      "url": "https://www.independent.co.uk/news/world/americas/us-politics/midterm-elections-2022/lauren-boebert-win-colorado-election-results-b2222944.html",
      "urlToImage": "https://static.independent.co.uk/2022/09/15/00/GettyImages-1325097771.jpg?quality=75&width=1200&auto=webp",
      "publishedAt": "2022-11-12T02:00:59Z",
      "content": "Colorado voters decriminalise psychedelic mushrooms\r\nColorado voters have passed a ballot initiative to decriminalize psychedelic mushrooms for people 21 and older and to create state-regulated heali… [+1312 chars]"
    },
    {
      "source": { "id": null, "name": "Tampa Bay Times" },
      "author": "Paul Guzzo",
      "title": "Gallagher, Tampa’s watermelon-smashing comedian, is dead at 76 - Tampa Bay Times",
      "description": "He graduated from H.B. Plant High School in 1964.",
      "url": "https://www.tampabay.com/life-culture/entertainment/2022/11/11/gallagher-tampas-watermelon-smashing-comedian-is-dead-76/",
      "urlToImage": "https://www.tampabay.com/resizer/B0nxwXXT6xsgHBYn2Wl3GKa0okg=/1200x675/smart/cloudfront-us-east-1.images.arcpublishing.com/tbt/LCJBB7WHKMI6TBKNIBWI6S7HAY.jpg",
      "publishedAt": "2022-11-12T02:00:25Z",
      "content": "TAMPA Watermelon-smashing comedian and Tampa-raised Leo Gallagher Jr., best known simply as Gallagher, died Friday, his former manager confirmed to Variety and TMZ. He was 76.\r\nGallagher had been in … [+3561 chars]"
    }
  ]
*/
  static defaultProps ={
        country: 'in',
        pageSize: 5,
        category: 'general',
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
  constructor() {
    super();
    console.log("Hello I am a constructor from news component");
    this.state = {
       //articles: this.articles,
       articles: [],
       loading: true,
       page:1,
       totalResults:0
       
    }
  }

  async updateNews()
  {
    console.log("CDM");
    //for set top loadbar progress App.js
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.setState({loading: true});
    this.props.setProgress(50);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles, 
      totalResults:parsedData.totalResults,
      loading:false
    });
  //for set top loadbar progress App.js
    this.props.setProgress(100);
  }


  async componentDidMount()
  {
    console.log("CDM");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.apikey}&page=1&pageSize=${this.props.pageSize}`;
    // let data = await fetch(url);
    // this.setState({loading: true});
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({articles: parsedData.articles, 
    //   totalResults:parsedData.totalResults,
    //   loading:false
    // });
    this.updateNews();
  }

 /* handlePrevClick = async()=>{
   console.log("Previous");

  //  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.apikey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  //  let data = await fetch(url);
  //  this.setState({loading: true});
  //  let parsedData = await data.json();
  //  console.log(parsedData);
  //  //this.setState({articles: parsedData.articles});

  //  this.setState({
  //   page : this.state.page - 1,
  //   articles: parsedData.articles,
  //   loading:false
  //  })
  this.setState({
    page : this.state.page - 1
  })
  this.updateNews();


  }*/


 /* handleNextClick = async()=>{
   console.log("Next");

  //  if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)))
  //  {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.apikey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
  //   let data = await fetch(url);
  //   this.setState({loading: true});
  //   let parsedData = await data.json();
  //   console.log(parsedData);
  //   //this.setState({articles: parsedData.articles});
 
  //   this.setState({
  //    page : this.state.page + 1,
  //    articles: parsedData.articles,
  //    loading: false
  //   })
  //  }

  this.setState({
    page : this.state.page + 1
  })
  this.updateNews();

  }*/


  fetchMoreData = async() => {
     this.setState({page: this.state.page + 1});

     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
     let data = await fetch(url);
     let parsedData = await data.json();
     console.log(parsedData);
     this.setState({
       articles: this.state.articles.concat (parsedData.articles), 
       totalResults:parsedData.totalResults,
     });
  };


  render() {
    console.log("render");
    return (
      <>
        <h2 className="text-center">NewsMonkey - Top Headline</h2>
        {this.state.loading && <Spinner/>}
       {/* {this.state.loading && <Spinner/>} 
        <div className="row my-3" >
        {!this.state.loading && this.state.articles.map((element)=> {
          return <div className="col-md-4" key={element.url}>
          <NewsItem  title={element.title ? element.title.slice(0, 20) : ""} description={element.description ? element.description.slice(0,40) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
         </div>
        })}
        </div>
      */} 

        {/*Infinite Scroll link1 for package install- https://www.npmjs.com/package/react-infinite-scroll-component  link2 for code- https://codesandbox.io/s/yk7637p62z*/}

        <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner/>}
          >
          <div className="container">
          <div className="row my-3" >
          {this.state.articles.map((element)=> {
            return <div className="col-md-4" key={element.url}>
            <NewsItem  title={element.title ? element.title.slice(0, 20) : ""} description={element.description ? element.description.slice(0,40) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
          </div>
          })}
          </div>

          </div>
        </InfiniteScroll>

        {/*
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr;Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
        */}

        
      </>
    )
  }
}

export default News
