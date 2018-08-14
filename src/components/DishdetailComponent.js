import React, { Component } from "react"
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
class DishDetail extends Component {


    renderDish(dish) {
        if (dish != null)
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        else
            return (
                <div></div>
            );
    }

    renderComments(comments) {
        if (comments != null)
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>

                    {comments.map(comment => <ul>
                        <li style={{ listStyleType: "none" }}>{comment.comment}</li>
                        <li style={{ listStyleType: "none" }} >{`--${comment.author},${new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}`}</li>
                    </ul>)}

                </div>
            );
        else
            return (
                <div></div>
            );
    }

    render() {
        const { dish } = this.props;
        if (dish != null)
            return (
                <div className="container">
                    <div className="row">
                        {this.renderDish(dish)}
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
            );
        else
            return (
                <div></div>
            );
    }
}

export default DishDetail;