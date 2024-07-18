import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Character } from '../../interfaces/Character';

type Props = {
  character: Character
}

const CardCustom = ({character}: Props) => {
    return (
        <Card sx={{ height: 300, width: 250, backgroundColor: 'slateblue'}}>
          <CardMedia
            sx={{ height: 200 }}
            image={character.image}
            title={character.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {character.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {character.species}
            </Typography>
          </CardContent>
          {/* <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions> */}
        </Card>
    )
}

export default CardCustom