var issueDataList = [];
var issueList = document.getElementById("issuesList");
var form = document.getElementById("issueInputForm");

function getFormData() {
  var descriptionValue = document.getElementById("issueDescInput").value;
  var severityValue = document.getElementById("issueSeverityInput").value;
  var assignedToValue = document.getElementById("issueAssignedToInput").value;

  isEmpty(descriptionValue, severityValue, assignedToValue);
  appendToDOM(issueDataList);
  form.reset();
}

function CreateIssue(desc, severity, assignedTo, status) {
  this.desc = desc;
  this.severity = severity;
  this.assignedTo = assignedTo;
  this.status = status;
}
CreateIssue.prototype = {
  id: () => chance.guid(),
};

const isEmpty = (descriptionValue, severityValue, assignedToValue) => {
  if (!!descriptionValue && !!severityValue && !!assignedToValue) {
    return createIssueObj(descriptionValue, severityValue, assignedToValue);
  }
};

const createIssueObj = (descriptionValue, severityValue, assignedToValue) => {
  var issueData = new CreateIssue(
    descriptionValue,
    severityValue,
    assignedToValue,
    "open"
  );
  issueDataList.push(issueData);
  return issueDataList;
};

const appendToDOM = (dataListArray) => {
  issueList.innerHTML = "";
  if (dataListArray) {
    for (i = 0; i < dataListArray.length; i++) {
      issueList.innerHTML += `
            <div class="card bg-${dataListArray[i].severity.toLowerCase()} mb-3">
                <div class="card-body">
                    <h6>Issue Id: ${dataListArray[i].id()}</h6>
                    <p><i class="fas fa-info"></i> ${dataListArray[i].status}</p>
                    <p><strong>Desc:</strong><small>${dataListArray[i].desc}</small></p>
                    <p><i class="fas fa-bug"></i> ${dataListArray[i].severity}</p>
                    <p><i class="fas fa-user"></i> ${dataListArray[i].assignedTo}</p>
                </div>
            </div>
        `;
    }
  }
};


//Need to Work on local storage.
/* const fetchIssues = () => {
  var issues = JSON.parse(localStorage.getItem("issueDataList"));
  appendToDOM(issueDataList);
};

const setIssue = () => {
  if (!localStorage.getItem("issueDataList")) {
    issueDataList.push(issueData);
    localStorage.setItem("issueDataList", JSON.stringify(issueDataList));
    return issueDataList;
  }else{

  }
}; */
