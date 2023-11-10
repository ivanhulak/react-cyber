import React from 'react'
import { commentsList } from '../data/commentsList'
import { CommonViewMore } from './common/CommonViewMore'

export const Comment = ({ image, name, date, rate, comment, files }) => {
  return (
    <li className="comment">
      <div className="comment__inner">
         <div className="comment__avatar">
            <img src={image} alt="user image" />
         </div>
         <div className="comment__info info-comment">
            <div className="info-comment__inner">
               <div className="info-comment__top">
                  <div className="info-comment__name">{name}</div>
                  <div className="info-comment__date">{date}</div>
               </div>
               <ul className="info-comment__rate">
                  {rate.map((star, idx) => (
                     <li key={idx}><img src={star} alt="icon" /></li>
                  ))}
               </ul>
               <div className="info-comment__text">{comment}</div>
               <div className="info-comment__files">
                  {files.length ? files.map((file, idx) => (
                     <div key={idx} className="info-comment__file">
                        <img src={file} alt="attached file" />
                     </div>
                  )) : <></>}
               </div>
            </div>
         </div>
      </div>
    </li>
  )
}


export const Comments = () => {
  return (
    <section className="comments">
      <div className="container">
         <div className="comments__body">
            <ul className="comments__row">
               {commentsList.map(comment => <Comment key={comment.id} {...comment}/>)}
            </ul>
            <div className="comments__overlay"></div>
            <div className="comments__view-more">
               <CommonViewMore name={'viewmore'} />
            </div>
         </div>
      </div>
    </section>
  )
}

