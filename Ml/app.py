import streamlit as st
import pandas as pd
import numpy as np
# from sklearn.preprocessing import LabelEncoder, StandardScaler
import joblib           

scaler = joblib.load("scaler.pkl")
le_gender = joblib.load("label_encoder_gender.pkl")
le_diabetic = joblib.load("label_encoders_diabetic.pkl")        
le_smoker = joblib.load("label_encoders_smoker.pkl")
model = joblib.load("best_model.pkl")

st.set_page_config(page_title="Insurance Premium Prediction", page_icon=":hospital:", layout="centered")
st.title("Insurance Premium Prediction")
st.write("Enter the details below to predict the insurance premium amount.")

with st.form("input_form"):
    col1, col2 = st.columns(2)

    with col1:
        age = st.number_input("Age", min_value = 0, max_value = 100, value = 30)
        bmi = st.number_input("BMI", min_value = 10.0, max_value = 60.0, value = 25.0)
        children = st.number_input(" Number of Children", min_value = 0, max_value = 10, value = 0)

    with col2:
        bloodpressure = st.number_input("Blood Pressure", min_value = 80, max_value = 200, value = 120)
        gender = st.selectbox("Gender", options= le_gender.classes_)
        diabetic = st.selectbox("Diabetic", options= le_diabetic.classes_)
        smoker = st.selectbox("Smoker", options= le_smoker.classes_)

    submitted = st.form_submit_button("Predict Payment")
 
if submitted:

    input_data = pd.DataFrame({
        "age": [age],
        "gender": [gender],
        "bmi": [bmi],
        "bloodpressure": [bloodpressure],
        "diabetic": [diabetic],
        "children": [children],
        "smoker": [smoker]
        
    })

    input_data["gender"] = le_gender.transform(input_data["gender"])
    input_data["diabetic"] = le_diabetic.transform(input_data["diabetic"])
    input_data["smoker"] = le_smoker.transform(input_data["smoker"])


    num_cols = ["age", "bmi", "bloodpressure",  "children"]
    
    input_data[num_cols] = scaler.transform(input_data[num_cols])
    # input_data[num_cols] = scaler.transform(input_data[num_cols])

    prediction = model.predict(input_data)[0]

    st.success(f"**Estimated Insurance Payment:** ₹ {prediction:.2f}")
