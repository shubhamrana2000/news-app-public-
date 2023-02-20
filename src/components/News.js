import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import Spinner from "./spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: "5",
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - NewsMonster`;
  }

  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apikey=05bdc8c0305747ecac9ee92e368fb2aa&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      // page: this.state.page,
      articles: parsedData.articles,
      loading: false,
    });
    this.props.setProgress(100);

  }

  async componentDidMount() {
    this.updateNews();
  }

  // handlePrevClick = async () => {
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // };

  // handleNextClick = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apikey=05bdc8c0305747ecac9ee92e368fb2aa&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      // page: this.state.page,
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  render() {
    return (
      <div className="container d-flex flex-column align-items-center">
        <div className="container">
          <h1 className="text-center" style={{ margin: "28px 0px" }}>
            NewsMonster - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
            Headlines
          </h1>
        </div>

        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          style={{ alignItems: "center",overflow:'hidden' }}
          loader={<Spinner />}
        >
          <div className="container ">
            <div className="row ">
              {this.state.articles.map((element) => {
                  return (
                    <div className="col-md-4 my-2 " key={element.url}>
                      <NewsItem
                        title={element.title}
                        description={element.description}
                        imageUrl={element.urlToImage}
                        newsUrl={element.url}
                        author={element.author}
                        date={element.publishedAt}
                        source={element.source.name}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-evenly " style={{ marginTop: "8rem" }}>
          <button disabled={this.state.page <= 1} type="button" onClick={this.handlePrevClick} className="btn btn-dark"> &larr;Previous </button>
          <button disabled={ this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" onClick={this.handleNextClick} className="btn btn-dark">Next &rarr;</button>
        </div> */}
      </div>
    );
  }
}

export default News;
