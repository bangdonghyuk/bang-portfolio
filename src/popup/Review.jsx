//Review.js
import React, { useEffect, useState } from 'react';

function Review({onReviewOpen}) {
  const handleClick = () => {
    onReviewOpen(); //props 로 전달된 handleChangeValue 함수 새로운 이름
  };

    return (
      <div className="review">
        <button className="review__close" onClick={handleClick}>X</button>
        <div className="review__inner">
          <div className="review__list">
            <div className="review__item">
              <div className="review__item-inner">
              <div className="review__text">
                UI/UX 에 대한 섬세한 관심과 고민이 강점이라고 생각하며, 낯설고 어려운 기술스택에도 포기하지않고 적극적으로 협업을 통해 배우고자 하는 모습이 인상적이었습니다.
              </div>
              <div className="review__name">개발자 방*혁</div>
              </div>
            </div>
            <div className="review__item">
              <div className="review__item-inner">
              <div className="review__text">
                UI/UX 에 대한 섬세한 관심과 고민이 강점이라고 생각하며, 낯설고 어려운 기술스택에도 포기하지않고 적극적으로 협업을 통해 배우고자 하는 모습이 인상적이었습니다.
              </div>
              <div className="review__name">개발자 방*혁</div>
              </div>
            </div>
            <div className="review__item">
              <div className="review__item-inner">
              <div className="review__text">
                UI/UX 에 대한 섬세한 관심과 고민이 강점이라고 생각하며, 낯설고 어려운 기술스택에도 포기하지않고 적극적으로 협업을 통해 배우고자 하는 모습이 인상적이었습니다.
              </div>
              <div className="review__name">개발자 방*혁</div>
              </div>
            </div>
            <div className="review__item">
              <div className="review__item-inner">
              <div className="review__text">
                UI/UX 에 대한 섬세한 관심과 고민이 강점이라고 생각하며, 낯설고 어려운 기술스택에도 포기하지않고 적극적으로 협업을 통해 배우고자 하는 모습이 인상적이었습니다.
              </div>
              <div className="review__name">개발자 방*혁</div>
              </div>
            </div>
            <div className="review__item">
              <div className="review__item-inner">
              <div className="review__text">
                UI/UX 에 대한 섬세한 관심과 고민이 강점이라고 생각하며, 낯설고 어려운 기술스택에도 포기하지않고 적극적으로 협업을 통해 배우고자 하는 모습이 인상적이었습니다.
              </div>
              <div className="review__name">개발자 방*혁</div>
              </div>
            </div>
            <div className="review__item">
              <div className="review__item-inner">
              <div className="review__text">
                UI/UX 에 대한 섬세한 관심과 고민이 강점이라고 생각하며, 낯설고 어려운 기술스택에도 포기하지않고 적극적으로 협업을 통해 배우고자 하는 모습이 인상적이었습니다.
              </div>
              <div className="review__name">개발자 방*혁</div>
              </div>
            </div>
            <div className="review__item">
              <div className="review__item-inner">
              <div className="review__text">
                UI/UX 에 대한 섬세한 관심과 고민이 강점이라고 생각하며, 낯설고 어려운 기술스택에도 포기하지않고 적극적으로 협업을 통해 배우고자 하는 모습이 인상적이었습니다.
              </div>
              <div className="review__name">개발자 방*혁</div>
              </div>
            </div>
            <div className="review__item">
              <div className="review__item-inner">
              <div className="review__text">
                UI/UX 에 대한 섬세한 관심과 고민이 강점이라고 생각하며, 낯설고 어려운 기술스택에도 포기하지않고 적극적으로 협업을 통해 배우고자 하는 모습이 인상적이었습니다.
              </div>
              <div className="review__name">개발자 방*혁</div>
              </div>
            </div>
            <div className="review__item">
              <div className="review__item-inner">
              <div className="review__text">
                UI/UX 에 대한 섬세한 관심과 고민이 강점이라고 생각하며, 낯설고 어려운 기술스택에도 포기하지않고 적극적으로 협업을 통해 배우고자 하는 모습이 인상적이었습니다.
              </div>
              <div className="review__name">개발자 방*혁</div>
              </div>
            </div>
            <div className="review__item">
              <div className="review__item-inner">
              <div className="review__text">
                UI/UX 에 대한 섬세한 관심과 고민이 강점이라고 생각하며, 낯설고 어려운 기술스택에도 포기하지않고 적극적으로 협업을 통해 배우고자 하는 모습이 인상적이었습니다.
              </div>
              <div className="review__name">개발자 방*혁</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Review;