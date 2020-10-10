import {
  Box,
  Container,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

import { green } from '@material-ui/core/colors';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import dayjs from 'dayjs';
import {
  AppsOutlined as AppsOutlinedIcon,
  Create as CreateIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons';
import { useAuth } from 'src/modules/hooks/useAuth';
import { useDetail } from 'src/modules/hooks/useTodos';

const useStyles = makeStyles({
  cardHeader: {
    backgroundColor: green[500],
  },
  progressRoot: {
    display: 'flex',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function Profile() {
  const { user } = useAuth();
  const classes = useStyles();
  const router = useRouter();
  const qid = router.query.id as string;
  const todo = useDetail(qid, user);

  const handleDelete = useCallback(() => {
    console.log('Delete');
  }, []);

  const handleEdit = useCallback(() => {
    console.log('Edit');
  }, []);

  const handleHome = useCallback(() => {
    router.push('/');
  }, []);

  return (
    <Container>
      <Grid container justify="space-around" alignItems="center">
        <IconButton onClick={handleDelete}>
          <DeleteIcon fontSize="large" />
        </IconButton>
        <IconButton onClick={handleEdit}>
          <CreateIcon fontSize="large" />
        </IconButton>
        <IconButton onClick={handleHome}>
          <AppsOutlinedIcon fontSize="large" />
        </IconButton>
      </Grid>

      <Box m={1}>
        <Typography gutterBottom variant="subtitle1">
          タイトル
        </Typography>
        {todo ? (
          <Typography variant="h5" component="h1">
            {todo.title}
          </Typography>
        ) : (
          <Skeleton animation="wave" height={40} />
        )}
      </Box>

      <Box m={1}>
        <Typography gutterBottom variant="subtitle1">
          詳細
        </Typography>
        {todo ? (
          <Typography variant="body1">{todo.detail}</Typography>
        ) : (
          <Skeleton animation="wave" />
        )}
      </Box>

      <Box m={1}>
        <Typography gutterBottom variant="subtitle1">
          作成日時
        </Typography>
        <Typography variant="body1">
          {todo ? (
            dayjs(todo.create_at).format('YYYY年MM月DD日HH時mm分ss秒')
          ) : (
            <Skeleton animation="wave" />
          )}
        </Typography>
      </Box>

      <Box m={1}>
        <Typography gutterBottom variant="subtitle1">
          更新日時
        </Typography>
        <Typography variant="body1">
          {todo ? (
            dayjs(todo.update_at).format('YYYY年MM月DD日HH時mm分ss秒')
          ) : (
            <Skeleton animation="wave" />
          )}
        </Typography>
      </Box>
    </Container>
  );
}
