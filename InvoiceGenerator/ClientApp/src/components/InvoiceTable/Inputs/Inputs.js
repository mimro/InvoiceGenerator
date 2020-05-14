import React from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
}));

export function NameInput(props){
		return <TextField label="Nazwa" value={props.value} onChange={e => props.onChange(e.target.value)}  onBlur={props.onBlur }/>
		}

export function QuantityInput(props){
		return <TextField type="number" label="Ilosc" value={props.value} onChange={e => props.onChange(e.target.value)}  onBlur={props.onBlur }/>
		}

		
export function JmInput(props){
		//return <TextField label="Ilosc" value={props.value} onChange={e => props.onChange(e.target.value)}  onBlur={props.onBlur }/>
		      return <Select
          label="jm"
          value={props.value}
          onChange={e => props.onChange(e.target.value)} 
		  onBlur={props.onBlur }
        >
		   <MenuItem value="ryczałt">ryczałt</MenuItem>
          <MenuItem value="km">km</MenuItem>
          <MenuItem value="szt">szt</MenuItem>
        </Select>
		}

export function NettoPriceInput(props){
		return <TextField type="number"  
		 InputProps={{
            endAdornment: <InputAdornment position="end">zł</InputAdornment>,
          }}
		
 label="Cena netto" value={props.value} onChange={e => props.onChange(e.target.value)}  onBlur={props.onBlur }/>
		}

		export function VatInput(props){
		return <TextField type="number"  
		 InputProps={{
            endAdornment: <InputAdornment position="end">%</InputAdornment>,
          }}
		
 label="Vat" value={props.value} onChange={e => props.onChange(e.target.value)}  onBlur={props.onBlur}/>
		}