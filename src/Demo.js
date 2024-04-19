import React, { useState } from 'react';
import { Button, Dialog, DialogContent, TextField } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import "./App.css";

function MyDialog() {
    const [value, setValue] = useState(dayjs());
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenDialog = () => setIsOpen(true);
    const handleCloseDialog = () => setIsOpen(false);

    return (
        <div>
            <Button variant="outlined" style={{ color: 'white', background: 'black' }} onClick={handleOpenDialog}>
                Open Dialog
            </Button>
            <Dialog open={isOpen}  aria-labelledby="datetime-picker-dialog">
                <DialogContent>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            label="Date and Time"
                            value={value}
                            onChange={setValue}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    <Button onClick={handleCloseDialog}>Close</Button>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default MyDialog;
