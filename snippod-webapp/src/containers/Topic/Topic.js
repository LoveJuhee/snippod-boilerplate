import React, {Component} from 'react';
import DocumentMeta from 'react-document-meta';
import head from 'constants/head';

const meta = { ...head,
  title: 'Snippod boilerplate Main Page'
};

export default class Topic extends Component {

  render() {
    return (
      <div className="container">
        <DocumentMeta {...meta}/>

        <div className="topic main-container content full-width">
          { /*<TopicCard/>*/ }
          { /*<PostComposer {...this.props} /> */ }
          <h3 className="margin-bottom-0">And posts list</h3>
          { /*<Posts {...this.props} />*/ }
        </div>
      </div>
    );
  }
}
