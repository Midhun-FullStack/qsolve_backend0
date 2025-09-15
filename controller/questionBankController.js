
const questionBank = require("../model/questionBankSchema")
const asynchandler = require("express-async-handler")

exports.createQuestionBank=asynchandler(async (req,res)=>{
    

    const {title,description,semesterID,subjectID}=req.body
    const postCreated = await questionBank.create({title, description,semesterID,subjectID,fileUrl:req.file.path})
    if(!postCreated)res.status(400).send("error while creating the documents")
    console.log(req.file,);

    res.status(200).json(postCreated)

})

exports.getAllQuestionBank = asynchandler(async (req, res) => {
    const userID = req.user._id;
    const purchasedBundles = await purchase.find({ userID, paymentDone: true }).select('BundleId');
    const bundleIds = purchasedBundles.map(p => p.BundleId);
    const bundles = await Bundle.find({ _id: { $in: bundleIds } }).select('products');
    const questionBankIds = bundles.flatMap(b => b.products);
    const response = await questionBank.find({ _id: { $in: questionBankIds } });
    res.status(200).json(response);
})

exports.getQuestionBankBySubjects = asynchandler(async (req, res) => {
    const { subjectID } = req.body;
    const userID = req.user._id;
    const purchasedBundles = await purchase.find({ userID, paymentDone: true }).select('BundleId');
    const bundleIds = purchasedBundles.map(p => p.BundleId);
    const bundles = await Bundle.find({ _id: { $in: bundleIds }, products: { $exists: true } });
    const questionBankIds = bundles.flatMap(b => b.products);
    const response = await questionBank.findOne({ subjectID, _id: { $in: questionBankIds } });
    if (!response) return res.status(403).json({ message: 'Access denied: not purchased' });
    res.json(response);
});