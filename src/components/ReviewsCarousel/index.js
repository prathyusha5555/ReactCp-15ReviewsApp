import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {reviewItemIndex: 0}

  onClickLeftArrow = () => {
    const {reviewItemIndex} = this.state
    if (reviewItemIndex > 0) {
      this.setState(prevState => ({
        reviewItemIndex: prevState.reviewItemIndex - 1,
      }))
    }
  }

  onClickRightArrow = () => {
    const {reviewItemIndex} = this.state
    const {reviewsList} = this.props
    if (reviewItemIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        reviewItemIndex: prevState.reviewItemIndex + 1,
      }))
    }
  }

  renderReviewContainer = review => {
    const {imgUrl, username, companyName, description} = review
    return (
      <div className="review-container">
        <img src={imgUrl} alt={username} className="image" />
        <p className="name">{username}</p>
        <p className="company">{companyName}</p>
        <p className="review">{description}</p>
      </div>
    )
  }

  render() {
    const {reviewsList} = this.props
    const {reviewItemIndex} = this.state
    const currentReview = reviewsList[reviewItemIndex]
    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>

        <div className="container">
          <button
            type="button"
            className="button"
            data-testid="leftArrow"
            onClick={this.onClickLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow-icon"
            />
          </button>
          {this.renderReviewContainer(currentReview)}
          <button
            type="button"
            className="button"
            data-testid="rightArrow"
            onClick={this.onClickRightArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow-icon"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
