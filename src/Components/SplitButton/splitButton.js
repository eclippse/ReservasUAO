import React, { useState, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { withStyles } from "@material-ui/core";

const SplitButton = ({ name, options, classes, handleOption }) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
    if (handleOption) {
      handleOption(options[selectedIndex]);
    }
  };

  const handleMenuItemClick = (event, index) => {

    if(handleOption){
     handleOption(options[index])}
    setSelectedIndex(index);
    // handleOption(options[index]);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item xs={12}>
        <ButtonGroup
          className={classes.typografy}
          variant="outlined"
          size="large"
          ref={anchorRef}
          aria-label="split button"
        >
          <Button
            onClick={handleClick}
            className={classes.bnt}
            size="small"
            aria-controls={open ? "split-button-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={handleToggle}
          >
            {options[selectedIndex]}

            <ArrowDropDownIcon className={classes.arrow} />
          </Button>
        </ButtonGroup>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu">
                    {options.map((option, index) => (
                      <MenuItem
                        key={option}
                        disabled={index === 30}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Grid>
    </Grid>
  );
};

export default withStyles({
  typografy: {
    fontFamily: "'Poppins', sans-serif",
  },

  bnt: {
    border: "none",
    width: "120px",
    padding: "7px 10px",
    justifyContent: "space-evenly",
    boxShadow: "0px 0px 4px 0.5px rgb(0, 0, 0, 0.3)",
    color: "#C2272D",
    textTransform: "none",
    fontSize: "15px",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "600",
  },

  arrow: {
    color: "#000",
  },
})(SplitButton);
