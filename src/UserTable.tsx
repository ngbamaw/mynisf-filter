import React from "react";
import "./App.css";
import { Grid, IconButton, Paper, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import { StarBorder } from "@mui/icons-material";
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import * as PHPUnserialize from "./php-unserialize";


const keys: Record<string, string> = {
    id: 'Identifiant',
    user_id: "Numéro d'utilisateurs",
    avatar: 'Avatar',
    username: "Nom d'utilisateur",
    date_naissance: 'Date de naissance',
    age: 'Age',
    gender: 'Sexe',
    origine: 'Origine',
    origine_autre: 'Autre origine ',
    nationalite: 'Nationalité',
    ville: 'Ville ',
    region: 'Région',
    diplome: 'Diplôme',
    profession: 'Profession',
    situation_familial: 'Situation familial',
    nombre_enfant: "Nombre d'enfants",
    mode_garde: 'Mode de garde',
    hebergement: 'Herbegement',
    priere: 'Prière',
    fumer: 'Fumeuse',
    taille: 'Taille',
    silhouette: 'Silhouette',
    parle_arabe: 'Parler arabe',
    barbe: 'Barbe',
    hijab: 'Hijab',
    mouqabala: 'Type de muqabala',
    reseau: 'Relation aux réseaux',
    trait_caractere: 'Traits de caratères',
    principal_defaut: 'Principal défaut',
    temps_libre: 'Temps libre',
    aimer_voyager: 'Envie de voyage',
    relation_argent: "Relation avec l'argent",
    lecture_coran: 'Relation avec le Coran',
    apprendre_etudier: "Relation avec l'étude",
    science_islamique: 'Étude islamique',
    sexe_opposer: 'Sexe opposé',
    habitude_journaliere: 'Comment la foi est augmenté',
    savant_precheur: 'Prêcheurs suivis',
    avoir_enfant: "Combien d'enfants dans l'avenir",
    ceremonie_mariage: 'Cérémonie de mariage',
    relation_famille: 'Relation avec la famille',
    visite_famille: 'Fréquence de visite familial',
    relation_bellefamille: 'Relation avec la belle famille',
    valeur_familial: 'Place de la famille',
    demenager_futurepoux: 'Prête à démanager ?',
    faire_hijra: 'Envie de hijra',
    femme_travail: 'Son travail',
    femme_mariertravail: 'Travail lors du mariage',
    dispute_couple: 'Comment gérer les conflits',
    devoir_epoux: "Les devoirs de l'epoux(se)",
    rechercher_ageminimum: 'Age minimum',
    rechercher_agemaximum: 'Age maximum',
    rechercher_region: 'Region recherchée',
    rechercher_nationalite: 'Nationalité recherchée',
    rechercher_origine: 'Origine recherchée',
    rechercher_situationprofesionnelle: 'Situation pro',
    rechercher_divorcer: 'Situation sur le divorce',
    rechercher_avecenfant: 'Avec enfant',
    rechercher_hebergement: 'Hebergement',
    rechercher_hijra: 'Demande de hijra',
    rechercher_silhouette: 'Silhouette recherchée',
    rechercher_quelquesmots: 'Description du profil voulu',
};
// const properties = Object.keys(keys) as const;
// type Property = typeof properties;

const isArrayProperty = (property: string): boolean => ['mouqabala', 'reseau', 'trait_caractere', 'temps_libre', 'science_islamique', 'rechercher_silhouette'].includes(property);
const arrayPhpToString = (array: string): string => Object.values(PHPUnserialize.unserialize(array || '')).join(', ');


export interface ConfirmationDialogRawProps {
  keepMounted: boolean;
  open: boolean;
  onClose: () => void;
}

function DetailsProfil(props: ConfirmationDialogRawProps & {data: any, username: string}) {
  const { data, onClose, open, username, ...other } = props;

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onClose();
  };

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
      maxWidth="xs"
      open={open}
      {...other}
    >
      <DialogTitle><a target="_blank" rel="noreferrer" href={`https://www.mynisf.fr/profil/${username}`}>{username}</a></DialogTitle>
      <DialogContent dividers>
        <ul>
        {Object.entries(data).map(([key, value]) => {
          const text = `${keys[key]}: ${isArrayProperty(key as string) ? arrayPhpToString(value as string) : value}`;
          return (
            <li key={key}>{text}</li>
            // <li>keys value</li>
          )
        })}
        </ul>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel}>
          Cancel
        </Button>
        <Button onClick={handleOk}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
          }


interface ComplexGridProps {
  data?: any
}

const ComplexGrid: React.FC<ComplexGridProps> = ({
  data
}) => {
  const {
    username,
    lastSeen,
    apprendre_etudier,
    science_islamique,
    sexe_opposer,
    habitude_journaliere,
    rechercher_origine,
    hijab,
    age,
    rechercher_ageminimum,
    savant_precheur,
    priere,
    origine,
    nationalite
  } = data; 
  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h4" component="div">
                {username}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {lastSeen}
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="div">
                Relation avec l'étude: {apprendre_etudier}
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="div">
                Age: {age}
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="div">
                Age minimum: {rechercher_ageminimum}
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="div">
                Prière: {priere}
              </Typography>

              <Typography gutterBottom variant="subtitle1" component="div">
                Nationalité: {nationalite}
              </Typography>

              <Typography gutterBottom variant="subtitle1" component="div">
                Origine: {origine}
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="div">
                Origine recherchée: {rechercher_origine}
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="div">
               Predicateurs: {savant_precheur}
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="div">
                Les sciences Islamiques: {Object.values(PHPUnserialize.unserialize(science_islamique || '')).join(', ')}
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="div">
                Amis hommes: {sexe_opposer}
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="div">
                Hijab: {hijab}
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="div">
                Comment augmenter sa foi: {habitude_journaliere}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <IconButton>
              <StarBorder />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

function UserTable({ data }: { data: any }) {
    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState(0);
    const selectedUser = data.find((user: any) => user.profile?.id === selected);

    const handleClickListItem = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Grid container spacing={2}>
            {(
                data
                    .map(
                        ({
                            lastSeen,
                            profile,
                        }: {
                            lastSeen: string;
                            profile: any;
                        }) => (profile ? { lastSeen, ...profile } : null)
                    )
                    .filter(Boolean) as any[]
            )
                .filter((user) => user.lecture_coran === 'Tous les jours')
                .filter((user) => user.faire_hijra !== 'Non')
                .filter((user) => user.femme_mariertravail !== 'oui')
                .filter(
                    (user) => user.lastSeen !== 'Hors ligne depuis un moment'
                )
                // .filter((user) => ["Hijab", "Jilbeb"].includes(user.hijab || ''))
                .sort((a, b) => Number(a.age) - Number(b.age))
                //.filter((user) => Number(user.profile?.rechercher_ageminimum) <= 22)
                .map((user) => (
                    <Grid
                        item
                        key={user.id}
                        xs={6}
                        md={3}
                        onClick={() => {
                            setSelected(user.id || 0);
                            setOpen(true);
                        }}
                    >
                        <ComplexGrid data={user} />
                    </Grid>
                ))}
            <DetailsProfil
                keepMounted
                open={open}
                onClose={handleClose}
                data={selectedUser?.profile || {}}
                username={selectedUser?.username || ''}
            />
        </Grid>
    );
}

export default UserTable;
