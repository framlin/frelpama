#!/bin/sh
FRELPAMA=$HOME/frelpama/index.html
while true
do
RFID="`nfc-poll|grep UID| sed 's/ //' |awk -F ':' '{ print $2 }'| sed 's/ //g' `"
if [ -n "$RFID" ] ; then firefox file://$FRELPAMA?$RFID; fi
done 
