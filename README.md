# How to run the app
1. You need to install node.js (v20.18.0)
2. You need to open terminal.
3. Go to the project folder
4. run `npm install` 
5. As I used "create-react-app" boilprate to run project with `npm start`
6. If you have some problem with fetching data. Please make sure you have in public folder companies.json and dashboard.json. If they are empty you can take a look what the data should be in types/index.js as CompaniesResponse and DashboardResponse interfaces.


P.S
1. I didn't use any BE, I just mocked some data but It really does some fetch for fetch data from .json from public libriary. I also mocked some response for 1.5s
2. Some parts I just did ASAP and I didn't use any state managment as Reduxt or RxJs, or Mobx but I used React Context and did persist.
3. Loading and error handling works
4. Some best practises for structure or folders structure I didn't use as I have simple project to do not overhelm project, but I could easy explain how it should looks or etc.
5. I just borrow logo and favicon.ico
6. I didn't implement edit logic for items that's why i didn't use any form libriary or write it from the scratch.
7. Readme can be in progress 
