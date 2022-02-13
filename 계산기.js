var n1 = 0, n2 = 0;
var a = 0, b = 0, i = 1;  //a는 첫번째 숫자인지 두번째 숫자인지 구별, b는 소수점이 있는지 없는지 구별, i는 소수점 늘리는 역할
var cnt = 0;  //연산 횟수
var res = "";
var h2 = document.getElementsByTagName("h2");

function num(n) {
    if (cnt>0) {
        n1 = 0;
        res = "";
        cnt = 0;
    }

    h2[0].innerHTML = res;
    res+=n;

    if (a==0) {
        if (b==0) {
            n1*=10;
        } else {
            i*=0.1
            n*=i
        }

        n1+=n;
    }

    else {
        if (b==0) {
            n2*=10
        } else {
            i*=0.1
            n*=i
        }

        n2+=n;
    }

    h2[0].innerHTML = res;
}

function operator(n) {
    a = n;
    cnt = 0;
    if (a==1) {
        res+="+";
    } else if (a==2) {
        res+="-";
    } else if (a==3) {
        res+="x";
    } else if (a==4) {
        res+="/";
    }

    b = 0;
    i = 1;
    h2[0].innerHTML = res;
}

function dot() {
    b = 1;
    res+=".";
    h2[0].innerHTML = res;
}

function allClear() {
    n1 = 0;
    n2 = 0;
    a = 0;
    b = 0;
    res = "";
    h2[0].innerHTML = "0";
}

function result() {
    cnt+=1;
    res+="=";

    if(a==1) {
        n1+=n2;
    } else if(a==2) {
        n1-=n2;
    } else if(a==3) {
        n1*=n2;
    } else if(a==4) {
        n1/=n2;
    }

    n1 = Math.round(n1*1000)/1000
    res+=n1;
    h2[0].innerHTML = res;

    n2 = 0;
    a = 0;
    b = 0;
    res = n1;
}