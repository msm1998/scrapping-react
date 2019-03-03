import React, { Component } from "react";
import $ from 'cheerio';
import rp from 'request-promise';

const baps_url = 'https://www.baps.org';


class Dashboard extends Component {
    state = {
        'news': 'loading...'
    };

    componentDidMount() {

        rp(baps_url).then((html) => {
            //success!
            // console.log($('.whatsnew_list li',html).text());
            let itemList = [];
            $('ul.whatsnew_list li a.module_content_title', html).each(function (idx, li) {
                // itemList.push($(li).text());
                var s = $(li).text().split(":").map(e => e.trim());
                itemList.push(s);
            })
            this.setState({
                ...this.state,
                'news': (
                    <ul>{itemList.map(i => <li>{i}</li>)}</ul>
                )
            });
        }).catch(function (err) {
            console.log(err)
        });

        /* this.setState({
            ...state,
            'body': (<ul></ul>k.map(i => <li></li>)
        }); */
    }

    render() {
        return (
            <div className="container">
                <span className="center-text">
                    {this.state.news}
                </span>
            </div>
        )
    }
}

export default Dashboard;