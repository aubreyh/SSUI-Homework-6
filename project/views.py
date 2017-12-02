from flask import Flask, render_template

from app import app, pages

@app.route('/')

def home():
    return render_template('index.html')

@app.route('/restroom/')
def project_1():
    return render_template('project1.html')
    
@app.route('/tutor/')
def project_2():
    return render_template('project2.html')
    
@app.route('/classroom/')
def project_3():
    return render_template('project3.html')
    
@app.route('/glucose/')
def project_4():
    return render_template('project4.html')
    
@app.route('/research/')
def project_5():
    return render_template('project5.html')
    
@app.route('/breakfast/')
def project_6():
    return render_template('project6.html')
    
@app.route('/cura/')
def project_7():
    return render_template('project7.html')
    
@app.route('/dashboard/')
def project_8():
    return render_template('project8.html')
    
@app.route('/web/')
def project_9():
    return render_template('project9.html')
    
if __name__ == '__main__':
    app.run(debug=True)