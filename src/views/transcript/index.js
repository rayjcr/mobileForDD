import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PermissionHoc from '../../component/PermissionHoc';
import TeacherIndex from './teacher';
import StudentIndex from './student';

const Transcript = memo(({ app }) => {

  const { userInfo } = app;
  const navigate = useNavigate()

  useEffect(() => {
    
  }, [])

  return (
    userInfo.type!==1 && <StudentIndex />
  )
})

const mapStateToProps = (state) => {
  const { app } = state;
  return { app };
}

export default connect(mapStateToProps)(PermissionHoc([1,2,3])(Transcript))
