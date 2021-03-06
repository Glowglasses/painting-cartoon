const string = `
.minionContainer {
  top: 50%;
  transform: translate(-50%, -50%);
}

.minion-body::after {
  display: block;
  content: "";
  background-color: #ffcb4f;
  border-radius: 80px 80px 50px 50px;
}

.minion-body {
  border-radius: 80px 80px 50px 50px;
}

.minion > .hair {
  top: -15px;
}

.minion > .hair li {
  list-style: none;
  float: left;
}

.minion > .hair li:nth-of-type(-n+4) {
  border-right: 1px solid #333333;
  border-radius: 0 80% 0 0;
}

.minion > .hair.back li:nth-of-type(1) {
  transform: rotate(-70deg);
  margin-top: 36px;
}

.minion > .hair li:nth-of-type(1) {
}

.minion > .hair.back li:nth-of-type(2) {
  transform: rotate(-50deg);
  margin-top: 19px;;
}

.minion > .hair li:nth-of-type(2) {
}

.minion > .hair.back li:nth-of-type(3) {
  transform: rotate(-30deg);
  margin-top: 12px;
}

.minion > .hair li:nth-of-type(3) {
}

.minion > .hair.back li:nth-of-type(4) {
  transform: rotate(-10deg);
  margin-top: 3px;
}

.minion > .hair.back li:nth-of-type(5) {
  transform: rotate(2deg);
  border-left: 1px solid #333333;
  border-radius: 80% 0 0 0;
}

.minion > .hair.back li:nth-of-type(6) {
  transform: rotate(10deg);
  margin-top: 3px;
}

.minion > .hair li:nth-of-type(n+6) {
  border-left: 1px solid #333333;
  border-radius: 80% 0 0 0;
}

.minion > .hair.back li:nth-of-type(7) {
  transform: rotate(30deg);
  margin-top: 12px;
}

.minion > .hair.back li:nth-of-type(8) {
  transform: rotate(50deg);
  margin-top: 19px;
}

.minion > .hair.back li:nth-of-type(9) {
  transform: rotate(70deg);
  margin-top: 36px;
}

.minion > .hair.front {
  margin-top: 3px;
}

.minion .hair.front li:nth-of-type(1) {
  transform: rotate(-60deg);
  margin-top: 21px;
}

.minion .hair.front li:nth-of-type(2) {
  transform: rotate(-46deg);
  margin-top: 12px;
}

.minion .hair.front li:nth-of-type(3) {
  transform: rotate(-28deg);
  margin-top: 7px;
}

.minion .hair.front li:nth-of-type(4) {
  transform: rotate(-12deg);
  margin-top: 5px;
}

.minion .hair.front li:nth-of-type(5) {
  transform: rotate(-2deg);
  margin-top: 3px;
}

.minion .hair.front li:nth-of-type(6) {
  transform: rotate(12deg);
  margin-top: 6px;
}

.minion .hair.front li:nth-of-type(7) {
  transform: rotate(28deg);
  margin-top: 7px;
}

.minion .hair.front li:nth-of-type(8) {
  transform: rotate(46deg);
  margin-top: 12px;
}

.minion .hair.front li:nth-of-type(9) {
  transform: rotate(60deg);
  margin-top: 21px;
}

.goggle {
  border: 3px solid hsl(0, 0%, 40%);
  border-radius: 50%;
}

.eye {
  box-shadow: inset 0 2px 10px 0 rgba(51, 51, 51, 0.5),
  inset 0 -1px 5px 0 rgba(51, 51, 51, 0.3);
  background-color: whitesmoke;
  border-radius: 50%;
  margin: 1px 0;
}

.eye::before {
  border-radius: 50%;
  background-color: #e7a452;
  background-image: radial-gradient(
    #e7a452 0%,
    #91695c 49%,
    #91695c 74%,
    #000000 99%
  );
  top: 50%;
  margin: -7.5px;
}

.eye::after {
  border-radius: 50%;
  background-color: #333333;
  top: 50%;
  margin: -2.5px;
}

.goggle-frame {
  border: 5px solid #cccccc;
  border-radius: 50%;
  top: 40px;
}

.goggle-frame.left {
  margin-left: -30px;
}

.goggle-frame.right {
  margin-right: -30px;
}

.goggle-shadow {
  top: 45px;
  border-radius: 50%;
  background-image: radial-gradient(
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0) 50%
  );
}

.goggle-strap {
  top: 68px;
  background: black;
}

.goggle-strap::before {
  top: -7px;
  border-right: 16px solid #444;
  border-top: 2px solid transparent;
}

.goggle-strap::after {
  top: 3px;
  border-right: 16px solid #444;
  border-bottom: 2px solid transparent;
}

.goggle-strap-link {
  top: 58px;
  background-color: #999999;
}

.mouth {
  top: 110px;
  border-radius: 70%;
  border-bottom: 2px solid #de9a33;
  margin-left: -30px;
  box-shadow: inset 0 -1px 2px -1px rgba(0, 0, 0, 0.3);
}

.dungarees {
  bottom: 0;
}

.dungarees > .dungarees-front {
  bottom: 0;
  border-top: 1px solid #4883b8;
}

.dungarees > .dungarees-front::before {
  top: 0;
  border: 1px solid #4883b8;
  border-radius: 0 0 35% 0;
  box-shadow: 40px -40px 30px 40px #6D9CC6;
}

.dungarees > .dungarees-front::after {
  top: 0;
  border: 1px solid #4883b8;
  box-shadow: -40px -40px 30px 40px #6D9CC6;
  border-radius: 0 0 0 35%;
}

.dungarees-strap {
  background-color: #79a3ca;
  border: 1px solid #4883b8;
}

.dungarees-strap.left {
  top: 0;
  transform: rotate(15deg) translateX(-10px);
}

.dungarees-strap.right {
  top: 0;
  transform: rotate(-15deg) translateX(10px);
}

.dungarees-strap .button {
  border-radius: 50%;
  background: #333333;
  top: 1px;
}

.dungarees > .dungarees-bottom {
  bottom: 0;
  background-color: #6d9cc6;
  background-image: linear-gradient(top, #6d9cc6 45%, #4b6587 100%);
  border-top: 1px solid #4883b8;
}

.dungarees > .dungarees-pocket {
  bottom: 35px;
  margin-left: -17.5px;
  border-radius: 0 0 15px 15px;
  border-left: 1px solid #4883b8;
  border-right: 1px solid #4883b8;
  border-bottom: 1px solid #4883b8;
}

.dungarees > .dungarees-pocket::before {
  top: -13px;
  border-bottom: 1px solid #4883b8;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  border-radius: 20px;
}

.dungarees > .dungarees-pocket > .logo {
  top: 50%;
  margin-left: -12.5px;
  margin-top: -10.5px;
  background: #333333;
  border-radius: 50%;
}

.dungarees > .dungarees-pocket > .logo::before {
  top: 50%;
  margin-left: -7.5px;
  margin-top: -7.5px;
  background: #6D9CC6;
  transform: rotate(45deg);
}

.dungarees > .dungarees-pocket > .logo::after {
  top: 50%;
  margin-left: -3.5px;
  margin-top: -3.5px;
  background: #333333;
  border-radius: 50%;

}

.dungarees > .dungarees-pocket > .logo span {
  background: #333333;
  border-bottom: 1px solid #6D9CC6;
  top: 48%;
  margin-top: -1px;
}

.arm {
  bottom: 21px;
  background-color: #ffcb4f;
}

.arm.left {
  top: 164px;
  border-radius: 30% 0 0 0;
  transform: rotate(22deg);
}

.arm.right {
  top: 164px;
  border-radius: 0 30% 0 0;
  transform: rotate(-22deg);
}

.arm.left::after {
  bottom: 0;
  border-radius: 38% 0 0 48%;
  background-color: inherit;
  transform: translate(0, 28px) rotate(-88deg);
}

.arm.right::after {
  bottom: 0;
  border-radius: 0 38% 48% 0;
  background-color: inherit;
  transform: rotate(88deg) translate(26px, 29px);
}

.arm-shadow {
  top: 180px;
  border-radius: 50%;
}

.arm-shadow.left {
  box-shadow: inset 2px 0 3px -1px rgba(0, 0, 0, 0.3);
  transform: rotate(5deg);
}

.arm-shadow.right {
  box-shadow: inset -2px 0 3px -1px rgba(0, 0, 0, 0.3);
  transform: rotate(-5deg);
}

.leg {
  bottom: -15px;
  background: #4B6587;
  border-left: 1px solid #4883b8;
  border-right: 1px solid #4883b8;
}

.leg.left {
  border-radius: 0 0 10% 20%/0 0 80% 80%;
}

.leg::after {
  top: -10px;
  background: #4B6587;
  border-bottom: 1px solid #4883b8;
}

.leg.left::after {
  transform: rotate(55deg);
}

.leg.right {
  border-radius: 0 0 20% 10%/0 0 80% 80%;
}

.leg.right::after {
  transform: rotate(-55deg);
}

.shoe {
  bottom: -26px;
  background: #222222;
}

.shoe.left {
  border-radius: 50px 20px 15px 10px;
  transform: rotate(-3deg);
}

.shoe.left::before {
}

.shoe::before {
  top: -10px;
  background: #222222;
}

.shoe.left::after {
  border-radius: 10px 0 0 10px;
}

.shoe.right {
  border-radius: 20px 50px 10px 15px;
  transform: rotate(3deg);
}
`
export default string;