//import Card from "./components/card";
import React from "react"; /* */

import MaterialCard from "@material-ui/core/Card"; /* isorine biblioteka, paruosti komponenttai*/
import CardMedia from "@material-ui/core/CardMedia"; /* isorine biblioteka, paruosti komponenttai*/
import CardContent from "@material-ui/core/CardContent"; /* isorine biblioteka, paruosti komponenttai*/
import Typography from "@material-ui/core/Typography"; /* isorine biblioteka, paruosti komponenttai*/
import styles from "./card.module.scss";

import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import FavoriteIcon from "@material-ui/icons/Favorite";

import NotFavoriteIcon from "@material-ui/icons/FavoriteBorder";

const Card = ({
  imageSrc,
  title,
  description,
  onDelete,
  isMine,
  toggleLike,
  likesCount,
  isLiked
}) => (
  /*const Card = () => (
   */

  /* card componentas*/

  <MaterialCard className={styles.card}>
    <CardMedia className={styles.media} image={imageSrc} />
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
        {title}
      </Typography>
      <Typography component="p">{description}</Typography>
    </CardContent>

    <CardActions className={styles.actions} disableActionSpacing>
      <IconButton>
        <FavoriteIcon />
      </IconButton>
      <Typography component="p" />
      {isMine && (
        <IconButton onClick={onDelete} className={styles.delete}>
          <DeleteIcon />
        </IconButton>
      )}
    </CardActions>

    <IconButton onClick={toggleLike}>
      {isLiked ? <FavoriteIcon /> : <NotFavoriteIcon />}
    </IconButton>
    <Typography component="p">{likesCount}</Typography>
  </MaterialCard>
);

export default Card;
