if [ -d "/home/coder/project/workspace/bookStore-application-react/react/src/tests/" ]
    then
        rm -r /home/coder/project/workspace/bookStore-application-react/react/src/tests;
fi
cp -r /home/coder/project/workspace/react/tests /home/coder/project/workspace/bookStore-application-react/react/src/;
cd /home/coder/project/workspace/bookStore-application-react/react/;
export CI=true;
npx react-scripts test --verbose --testPathPattern=src/tests 2>&1;
