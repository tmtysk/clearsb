#!/bin/sh -f

x=$(pwd)
x=${x##*/}
rm $x.xpi

# archive chrome (non-compressed)
mkdir -p build/chrome
cd chrome
find . ! -name '.*' -exec zip -0 ../build/chrome/$x.jar {} \;
cd ..

cp -f chrome.manifest install.rdf build

# archive whole (compressed)
cd build
find . ! -name . -exec zip -9 ../$x.xpi {} \;
cd ..

rm -rf build
