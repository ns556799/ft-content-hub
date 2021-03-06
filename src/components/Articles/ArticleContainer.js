import React, {Component} from 'react'
import {Consumer} from "../../context"

import ArticleItem from './ArticleItem'
import '../../sass/_articleContainer.scss'

class ArticleContainer extends Component {
    render() {



        const ArticleItemWrapper = ({articleList, searchFilter, sectorFilter, articleTagFilter, platformFilter, productFilter, handleClientChange}) => {
            return (
                articleList.filter(searchFilter).filter(sectorFilter).filter(platformFilter).filter(productFilter).map((article, i) => {
                    return (
                        <ArticleItem searchFilter={handleClientChange} tagFilter={articleTagFilter} key={i} item={article}/>
                    )
                })
            )
        }


        return (
            <Consumer>
                {value => {
                    const {articleList, handleArticleTagFilter, handleClientChange} = value
                    const {search, sectorSearch, platformSearch, productSearch} = this.props
                    return (
                        <div className="wrap">
                            <div className='article-container' id='articleContainer'>
                                <ArticleItemWrapper articleList={articleList}
                                                    searchFilter={search}
                                                    sectorFilter={sectorSearch}
                                                    platformFilter={platformSearch}
                                                    articleTagFilter={handleArticleTagFilter}
                                                    productFilter={productSearch}
                                                    handleClientChange={handleClientChange}
                                />
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default ArticleContainer
