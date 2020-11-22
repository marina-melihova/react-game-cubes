import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gameSelectors, gameSlice } from '../redux/game';
import FinalForm from './FinalForm';
import Modal from './Modal';

function Header() {
  const start = useSelector(state => gameSelectors.getGamePhase(state));
  const points = useSelector(state => gameSelectors.getPoints(state));
  const dispatch = useDispatch();

  const [isShowModal, setIsShowModal] = useState(false);
  const closeForm = () => {
    setIsShowModal(prev => !prev);
  };
  const onReset = () => {
    setSecondsLeft(60);
    dispatch(gameSlice.points.actions.resetGame());
    dispatch(gameSlice.cubes.actions.resetGame());
    if (start) {
      dispatch(gameSlice.phase.actions.toggleStart());
    }
  };
  const onStart = () => {
    if (!start) {
      dispatch(gameSlice.cubes.actions.initCubes(35));
    }
    dispatch(gameSlice.phase.actions.toggleStart());
  };

  const [secondsLeft, setSecondsLeft] = useState(60);
  useEffect(() => {
    let token;
    if (start) {
      token = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
    }

    if (secondsLeft === 0 && start) {
      dispatch(gameSlice.phase.actions.toggleStart());
      setIsShowModal(true);
    }
    return () => {
      clearTimeout(token);
    };
  }, [start, secondsLeft]);

  return (
    <>
      <div className="jumbotron jumbotron-fluid py-3">
        <div className="container">
          <h1 className="display-6">Remove cubes</h1>
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <button
                type="button"
                className="btn btn-primary mr-3"
                onClick={onStart}
              >
                {start ? 'PAUSE' : 'START'}
              </button>
              <button
                type="button"
                className="btn btn-primary mr-5"
                onClick={onReset}
              >
                NEW GAME
              </button>
            </div>
            <div className="d-inline-flex flex-column">
              Points
              <span className="border-secondary bg-white p-2">{points}</span>
            </div>
            {/* <label className="d-inline-flex flex-column mr-3">
              Points
              <input
                type="text"
                className="form-control-lg text-center border-secondary bg-white"
                style={{ width: '3rem' }}
                readOnly
                defaultValue="74"
              />
            </label> */}
            <div className="d-inline-flex flex-column">
              Time left
              <span className="border-secondary bg-white p-2">
                {secondsLeft === 60 ? 1 : 0} :{' '}
                {secondsLeft === 60
                  ? '00'
                  : String(secondsLeft).padStart(2, '0')}
              </span>
            </div>
            {/* <input
              type="text"
              className="form-control-lg text-center border-secondary bg-white"
              style={{ width: '5rem' }}
              readOnly
              defaultValue=`${minutes}:${seconds}`
            /> */}
          </div>
        </div>
      </div>
      {isShowModal && (
        <Modal closeModal={closeForm}>
          <FinalForm closeModal={closeForm} />
        </Modal>
      )}
    </>
  );
}

export default Header;
