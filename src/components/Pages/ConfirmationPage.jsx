import CloseButton from "../Buttons/CloseButton";
import UpgradeButton from "../Buttons/UpgradeButton";

export default function ConfirmationPage() {
  return (
    <div className="ConfirmationPage">
      <div className="ConfirmationPageContainer">
        <div className="ConfirmationPageMainContainer">
          <CloseButton />
          <h1 className="Mainh1">URL Saved</h1>
          <p className="Mainp">We’ll send your reminder on [date] at [time].</p>
          <p className="Mainp">
            You can save two more URLs until you’ll need to upgrade.
          </p>
          <UpgradeButton />
        </div>
      </div>
    </div>
  );
}
